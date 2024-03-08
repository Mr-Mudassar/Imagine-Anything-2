"use client";
import DisplaySearchedCards from "@/components/DisplaySearchedCards";
import HomePageLayout from "@/components/HomePageLayout";
import Loader from "@/components/Loader";
import PaymentCancelPopup from "@/components/PaymentCancelModal";
import PaymentSuccessPopup from "@/components/PaymentSuccessPopup";
import useLocalStorage from "@/hooks/useLocalStorage";
import { ImageType, useStore } from "@/store";
import { AuthPayload } from "@/types";
import { apiClient } from "@/utils/apiClient";
import _ from "lodash";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useInfiniteQuery, useMutation, useQuery } from "react-query";

export default function HomePage() {
    const [hasScrollAbove90, setHasScrollAbove90] = useState(false);
    const setUserInfo = useLocalStorage<AuthPayload>("userInfo")[1];
    const [filters, setFilters] = useState({
        page: 1,
        page_size: 20,
        sort_by: "likes",
    });
    const [sortBy, setSortBy] = useState("likes");
    const [searchQuery, setSearchQuery] = useState<string | null>(null);
    const [setSearchedData] = useState(null);
    const [category, setCategory] = useState<string>("");
    const searchParams = useSearchParams();
    const successParams = searchParams.get("success");
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [showCancelPopup, setShowCancelPopup] = useState(false);
    const allImages = useStore(
        (state: { allImages: ImageType[] }) => state.allImages
    );
    const setAllImages = useStore((state) => state.setAllImages);
    const clientFetchAllData = useStore((state) => state.clientFetchAllData);
    const setClientFetchAllData = useStore(
        (state) => state.setClientFetchAllData
    );
    const setImageGenerateLimit = useStore(
        (state) => state.setImageGenerateLimit
    );
    const setPlanType = useStore((state) => state.setPlanType);
    const setUserData = useStore((state) => state.setUserData);
    const setIsRemix = useStore((state) => state.setIsRemix);
    const setImageDownloadLimit = useStore(
        (state) => state.setImageDownloadLimit
    );

    const handleScroll = _.debounce(() => {
        const { scrollTop, scrollHeight, clientHeight } =
            document.documentElement;
        const scrollPercentage = +(
            (scrollTop / (scrollHeight - clientHeight)) *
            100
        ).toFixed(1);

        if (scrollPercentage > 90 && !hasScrollAbove90 && !clientFetchAllData) {
            setHasScrollAbove90(true);
            setFilters((state) => ({
                ...state,
                page: state.page + 1,
            }));
        } else if (scrollPercentage < 90 && hasScrollAbove90) {
            setHasScrollAbove90(false);
        }
    }, 200);

    useQuery({
        queryKey: ["get-all-images", category, filters, sortBy],
        queryFn: () => {
            if (!category) {
                console.log("Category api __----------------", apiClient)
                return apiClient.get(`/categories/all/images/`, {
                    params: { ...filters, sort_by: sortBy },
                });
            } else {
                return apiClient.get(`/categories/${category}/images`, {
                    params: { ...filters, sort_by: sortBy },
                });
            }
        },
        onSuccess: ({ data }) => {
            if (category === "") {
                setAllImages([...allImages, ...data?.results]);
            } else {
                setAllImages([...data?.results]);
            }
            if (allImages?.length + data?.results?.length >= data?.count) {
                setClientFetchAllData(true);
            }
        },
        onError: (err: any) => {
            toast.error(err.message);
        },
        enabled: !clientFetchAllData || filters ? true : true,
    });

    const { hasNextPage } = useInfiniteQuery({
        queryKey: ["get-all-images", sortBy],
        queryFn: async ({ pageParam = 1 }) => {
            const { data } = await apiClient.get(
                `categories/all/images/?page=${pageParam}&page_size=10&sort_by=${sortBy}`
            );
            return data;
        },
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = allPages?.length
                ? allPages?.length + 1
                : undefined;
            return nextPage;
        },
        getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
    });

    const { mutate: userPlanSubscription } = useMutation({
        mutationKey: ["user-plan-subscription"],
        mutationFn: async (data) => {
            return apiClient.post(`/change-plan/`, data).then(({ data }) => {
                setUserInfo(data);
                setUserData(data);
                setPlanType(data?.user_data?.usersubscription?.plan_type);
                setIsRemix(data?.user_data?.usersubscription?.ability_to_remix);
                setImageDownloadLimit(
                    data?.user_data?.usersubscription?.max_download_limit
                );
                setImageGenerateLimit(
                    data?.user_data?.usersubscription?.max_generate_limit
                );
            });
        },
    });

    useQuery({
        queryKey: ["search-any-image", searchQuery],
        queryFn: () => {
            return apiClient.get(`/search/`, {
                params: { q: searchQuery },
            });
        },
        onSuccess: ({ data }) => {
            setAllImages(data?.results);
            if (data?.results?.length === 0) {
                toast.success("No images found in the list");
            } else {
                toast.success(
                    `${data?.results?.length} image${data?.results?.length > 1 ? "s" : ""
                    } found in the list`
                );
            }
        },
        onError: (error: any) => {
            console.error("Error occurred while fetching data:", error.message);
        },
        enabled: searchQuery !== null && searchQuery !== "",
    });

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [hasScrollAbove90, handleScroll]);

    useEffect(() => {
        setAllImages([]);
        setClientFetchAllData(false);
        setFilters({
            page: 1,
            page_size: 20,
            sort_by: sortBy,
        });
    }, [sortBy, setAllImages, setClientFetchAllData]);

    useEffect(() => {
        if (successParams === "true") {
            setShowSuccessPopup(true);
            const planName = localStorage.getItem("plan_name");
            const userInfo = localStorage.getItem("userInfo");
            const parsePlan = JSON.parse(userInfo as string);

            const data = {
                user_id: parsePlan?.user_data?.user_id || null,
                new_plan_type: planName,
                email: parsePlan?.user_data?.email || null,
            };
            userPlanSubscription(data as any);
        } else if (successParams === "false") {
            setShowCancelPopup(true);
        }
    }, [successParams, userPlanSubscription]);

    return (
        <div className="flex flex-col gap-y-6 w-full pt-5  pb-12">
            <HomePageLayout
                setSearchQuery={setSearchQuery}
                setSearchedData={setSearchedData as any}
                setSortBy={setSortBy}
            />
            {allImages.length > 0 || hasNextPage ? (
                <DisplaySearchedCards imagesDetails={allImages} />
            ) : (
                <Loader />
            )}

            <PaymentSuccessPopup
                setIsOpen={setShowSuccessPopup}
                isOpen={showSuccessPopup}
            />
            <PaymentCancelPopup
                setIsOpen={setShowCancelPopup}
                isOpen={showCancelPopup}
            />
        </div>
    );
}
