"use client";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useStore } from "@/store";
import { AuthPayload } from "@/types";
import { apiClient } from "@/utils/apiClient";
import { useParams } from "next/navigation";
import { useQuery } from "react-query";
import CommentSection from "./ImageDetails/CommentSection";
import ImageSection from "./ImageDetails/ImageSection";
import ImageTextDetails from "./ImageDetails/ImageTextDetails";
import toast from "react-hot-toast";

export default function ImageDetails() {
    const setOpenLoginModal = useStore((state) => state.setOpenLoginModal);
    const userInfo = useLocalStorage<AuthPayload>("userInfo")[0];
    const { id } = useParams();

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["get-image-details", id],
        queryFn: async () => {
            return apiClient
                .get(`/images_id/${id}`)
                .then(({ data }) => data)
                .catch((err) => toast.error(err));
        },
    });

    return (
        <div className="!h-full grid grid-cols-1 lg:grid-cols-[402px_1fr] gap-x-12 gap-y-10 p-5 font-alumniRegular">
            <ImageSection
                isLoading={isLoading}
                userInfo={userInfo}
                data={data}
                refetch={refetch}
            />
            <section className="relative flex flex-col gap-y-3">
                <ImageTextDetails isLoading={isLoading} data={data} />
                <CommentSection
                    isLoading={isLoading}
                    userInfo={userInfo}
                    data={data}
                    setOpenLoginModal={setOpenLoginModal}
                    refetch={refetch}
                />
            </section>
        </div>
    );
}
