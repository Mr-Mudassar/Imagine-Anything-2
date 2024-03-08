"use client";
import Comment from "@/assets/svgs/Comment.svg";
import Like from "@/assets/svgs/Like.svg";
import BulbIcon from "@/assets/svgs/bulb.svg";
import DeleteIcon from "@/assets/svgs/delete.svg";
import LikeFill from "@/assets/svgs/like-fill.svg";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useStore } from "@/store";
import { AuthPayload, UserData } from "@/types";
import { apiClient } from "@/utils/apiClient";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import Loader from "./Loader";

export default function UserDetail() {
    const userInfo = useLocalStorage<AuthPayload>("userInfo")[0];
    const planType = useStore((state) => state.planType);
    const imageGenerateLimit = useStore((state) => state.imageGenerateLimit);

    const { data, isLoading, refetch } = useQuery<UserData[]>({
        queryKey: ["get-user-all-images"],
        queryFn: async () => {
            return apiClient
                .get(`/user-images/${userInfo?.user_data?.user_id}`)
                .then(({ data }) => data)
                .catch((err) => console.log(err));
        },
    });

    const deleteImage = useMutation({
        mutationKey: "delete-user-image-by-id",
        mutationFn: async (id: number) => {
            await apiClient.delete(`/delete-image/${id}/`);
        },
        onSuccess: async () => {
            await refetch();
            toast.success("Image successfully deleted");
        },
        onError: () => {
            toast.error("Failed to delete image");
        },
    });

    return (
        <section className="flex flex-col items-center justify-center w-full h-full">
            {isLoading ? (
                <Loader />
            ) : (
                <div className="flex flex-col gap-y-4 py-8 w-full">
                    <div className="flex flex-col sm:flex-row gap-y-2 items-center justify-between">
                        <h1 className="text-2xl sm:text-3xl text-white font-bold">
                            Generated Images ({data?.length})
                        </h1>
                        <div className="flex items-center gap-x-5">
                            {planType === "free" && (
                                <span className="text-lg text-yellow">
                                    You have {imageGenerateLimit} credits left
                                </span>
                            )}
                            <Link
                                href={
                                    imageGenerateLimit == 0
                                        ? "/subscriptions-offers"
                                        : "/generate-images/generating-from-prompt"
                                }
                            >
                                <button className="flex items-center justify-center primary-btn py-2 px-4 text-base font-bold gap-2 tracking-widest">
                                    <Image src={BulbIcon} alt="bulbicon" />
                                    <span> Generate Image</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 cursor-pointer">
                        {data?.map((item, id: number) => {
                            return (
                                <Link
                                    key={id}
                                    href={`/${item?.caption[0].replace(
                                        /\s+/g,
                                        "-"
                                    )}/${item?.image_id}`}
                                >
                                    <div className="relative items-center justify-center h-[320px] overflow-hidden rounded-2xl">
                                        <Image
                                            className="h-full w-full object-cover"
                                            src={item?.image_path}
                                            alt={item?.image_path}
                                            width={350}
                                            height={100}
                                            quality={100}
                                        />
                                        <section className="absolute bg-gradient-to-t from-black/95 to-transparent top-0 w-full h-full">
                                            <section className="absolute left-3 top-3 flex items-center justify-center bg-black/30 text-lg backdrop-blur-lg text-white px-2 py-1.5 rounded-lg">
                                                {item?.username?.split(" ")[0]}{" "}
                                                {item?.username
                                                    ?.split(" ")[1]
                                                    ?.charAt(0)
                                                    .toUpperCase()}
                                            </section>
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    deleteImage?.mutate(
                                                        item?.image_id
                                                    );
                                                }}
                                                className="absolute right-3 top-3 flex items-center justify-center w-8 h-8 rounded-lg bg-black/50 backdrop-blur-xl"
                                            >
                                                <Image
                                                    src={DeleteIcon}
                                                    alt="delete icon"
                                                />
                                            </button>
                                        </section>
                                        <section className="absolute w-fulll left-1/2 top-[90%] -translate-x-1/2 -translate-y-1/2  text-white socails">
                                            <div className="flex items-center justify-center gap-x-10 text-xl">
                                                <div className="flex items-center gap-x-2">
                                                    {item?.likes?.some(
                                                        (el) =>
                                                            el ===
                                                            userInfo?.user_data
                                                                ?.user_id
                                                    ) ? (
                                                        <Image
                                                            src={LikeFill}
                                                            alt="LikeFill"
                                                            width={20}
                                                            height={20}
                                                        />
                                                    ) : (
                                                        <Image
                                                            src={Like}
                                                            alt="LikeFill"
                                                            width={20}
                                                            height={20}
                                                        />
                                                    )}
                                                    <span>
                                                        {item?.likes?.length}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-x-2">
                                                    <Image
                                                        src={Comment}
                                                        alt="Comment"
                                                        width={20}
                                                        height={20}
                                                    />
                                                    <span>
                                                        {item?.comments?.length}
                                                    </span>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </section>
    );
}
