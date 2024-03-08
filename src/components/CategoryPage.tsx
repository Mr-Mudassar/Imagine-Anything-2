"use client";

import DisplaySearchedCards from "@/components/DisplaySearchedCards";
import HomePageLayout from "@/components/HomePageLayout";
import Loader from "@/components/Loader";
import { ImageType } from "@/store";
import { apiClient } from "@/utils/apiClient";
import _ from "lodash";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategoryPage() {
    const { category } = useParams();
    const [hasScrollAbove90, setHasScrollAbove90] = useState(false);
    const [filters, setFilters] = useState({
        page: 1,
        page_size: 20,
        sort_by: "likes",
    });
    const [sortBy, setSortBy] = useState("likes");
    const [setSearchQuery] = useState<string | null>(null);
    const [allImages, setAllImages] = useState<ImageType[] | null>(null);

    const handleScroll = _.debounce(() => {
        const { scrollTop, scrollHeight, clientHeight } =
            document.documentElement;
        const scrollPercentage = +(
            (scrollTop / (scrollHeight - clientHeight)) *
            100
        ).toFixed(1);

        if (scrollPercentage > 90 && !hasScrollAbove90) {
            setHasScrollAbove90(true);
            setFilters((state) => ({
                ...state,
                page: state.page + 1,
            }));
        } else if (scrollPercentage < 90 && hasScrollAbove90) {
            setHasScrollAbove90(false);
        }
    }, 200);

    useEffect(() => {
        if (!category) return;
        const fetchImages = async () => {
            const { data } = await apiClient.get(
                `/categories/${category}/images`,
                {
                    params: { ...filters, sort_by: sortBy },
                }
            );
            setAllImages((prevImages) => [
                ...(prevImages || []),
                ...data?.results,
            ]);
        };
        fetchImages();
    }, [filters, sortBy, category]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [hasScrollAbove90, handleScroll]);

    useEffect(() => {
        setAllImages([]);
        setFilters({
            page: 1,
            page_size: 20,
            sort_by: sortBy,
        });
    }, [sortBy]);

    return (
        <div className="flex flex-col gap-y-6 w-full pt-5 antd-selector-for-user pb-12">
            <HomePageLayout
                setSearchQuery={setSearchQuery as any}
                setSearchedData={setAllImages as any}
                setSortBy={setSortBy}
            />
            {allImages && allImages.length > 0 ? (
                <DisplaySearchedCards imagesDetails={allImages} />
            ) : (
                <div className="flex items-center justify-center">
                    <Loader />
                </div>
            )}
        </div>
    );
}
