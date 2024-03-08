"use client";

import Download from "@/assets/svgs/Download.svg";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useStore } from "@/store";
import { AuthPayload } from "@/types";
import { apiClient } from "@/utils/apiClient";
import Image from "next/image";
import Link from "next/link";
import { SetStateAction, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import Loader from "./Loader";
import RemixIcon from "@/assets/svgs/Remix.svg";

type ImageType = {
    generated_image_url: string;
};
function TextPrompt() {
    const [data, setData] = useState<ImageType | null>(null);
    const [loading, setLoading] = useState(false);
    const [prompt, setPrompt] = useState("");
    const setOpenLoginModal = useStore((state) => state.setOpenLoginModal);
    const setImageGenerateLimit = useStore((state) => state.setAllImages);
    const imageGenerateLimit = useStore((state) => state.imageGenerateLimit);
    const [promptRefined, setPromptRefined] = useState(true);
    const setImageDownloadLimit = useStore(
        (state) => state.setImageDownloadLimit
    );
    const imageDownloadLimit = useStore((state) => state.imageDownloadLimit);
    const userData = useStore((state) => state.userData);
    const isRemix = useStore((state) => state.isRemix);
    const navOpen = useStore((state) => state.navOpen);
    const setNavOpen = useStore((state) => state.setNavOpen);

    // const userInfo = useLocalStorage<AuthPayload>("userInfo")[0];
    const userInfo = userData;
    const generateImageMutation = useMutation({
        mutationKey: "generate-image",
        mutationFn: async (data) => {
            const response = await apiClient.post(`/generate-image/`, data);
            return response.data;
        },
        onSuccess: (response) => {
            setLoading(false);
            setData(response);
            decrementLimit("image_generation");
        },
        onError: () => {
            setLoading(false);
            toast.error("Failed to generate image");
        },
    });

    const decrementLimit = async (action: unknown) => {
      try {
        const response = await apiClient.post(`/decrement_limit/`, {
            user_id: userInfo?.user_data?.user_id,
            action,
        });

        toast.success(response?.data?.message);
        setImageGenerateLimit(
            response?.data?.user_subscription?.max_generate_limit
        );
        setImageDownloadLimit(
            response?.data?.user_subscription?.max_download_limit
        );
      } catch (error) {
        console.log(error)
      }
    };

    const finishHandler = async (values: any) => {
        if (!userData) {
            return setOpenLoginModal(true);
        }
        if (imageGenerateLimit === 0) {
            return toast.success("Maximum image generation limit reached");
        } else {
            setLoading(true);
            generateImageMutation.mutate({
                ...values,
                username: userInfo?.user_data?.username,
                user_id: userInfo?.user_data?.user_id,
                email: userInfo?.user_data?.email,
            });
        }
    };

    const Decrementer = useMutation({
        mutationKey: "generate-image-countdown",
        mutationFn: async (data) => {
            const response = await apiClient.post(`/decrement_limit/`, data);
            
            toast.success(response?.data?.message); 
            setImageGenerateLimit(
                response?.data?.user_subscription?.max_generate_limit
            );
            setImageDownloadLimit(
                response?.data?.user_subscription?.max_download_limit
            );
            return response.data;
        },
    });

    const handleDownload = (e: { preventDefault: () => void }) => {
        if (imageDownloadLimit > 0) {
            Decrementer.mutate({
                user_id: userInfo?.user_data?.user_id,
                action: "image_download",
            } as any);
        } else if (imageDownloadLimit == 0) {
            e.preventDefault();
            toast.success("maximum downloads succeeded");
        }
    };

    const refiningPrompt = useMutation({
        mutationKey: "/refine-prompt/",
        mutationFn: async (data) => {
            const response = await apiClient.post(`/refine-prompt/`, data);
            setPromptRefined(false);
            setPrompt(response.data.refined_prompt);
            return response.data;
        },
    });

    const handleChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        if (promptRefined) {
            setPrompt(event.target.value);
        }
    };

    if(navOpen){
        setNavOpen(false)
    }

    return (
        <div className="flex flex-col gap-y-8 mt-9 items-center justify-center pb-12">
            <div className="relative flex flex-col gap-x-5 items-center w-full md:w-3/5">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (!userInfo) {
                            setOpenLoginModal(true);
                        } else {
                            finishHandler({ prompt });
                        }
                    }}
                    className="flex w-full gap-y-3 justify-between !h-12"
                >
                    <input
                        value={prompt}
                        onChange={handleChange}
                        className="w-full h-12 rounded-l-[140px] text-lg px-5 focus:border-transparent text-black"
                        required
                    />
                    <button
                        type="submit"
                        className="text-center px-5 bg-[#C970FF] text-base md:text-lg text-white rounded-e-3xl"
                    >
                        Generate
                    </button>
                    {userData?.user_data.usersubscription.ability_to_remix &&  (
                            <button
                                onClick={() =>
                                    prompt !== "" &&
                                    refiningPrompt.mutate({
                                        prompt: prompt,
                                    } as any)
                                }
                                className="border-none transition-all duration-700 absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-[120%] bg-[#C970FF]/20 backdrop-blur-xl px-5 py-1 rounded-full flex items-center gap-x-6 -mt-2"
                            >
                                <span className="font-alumniRegular text-xl font-bold text-white">
                                    {refiningPrompt?.isLoading
                                        ? "Refining Prompt"
                                        : "Refine Prompt"}
                                </span>
                                <div
                                    className={`${
                                        refiningPrompt?.isLoading
                                            ? "animate-spin"
                                            : ""
                                    }`}
                                >
                                    <Image
                                        src={RemixIcon}
                                        width={20}
                                        height={20}
                                        alt="remix icon"
                                    />
                                </div>
                            </button>
                        )}
                </form>
            </div>

            <div className="flex gap-4 z-50">
                <section className="relative overflow-hidden rounded-2xl cursor-pointer">
                    {loading ? (
                        <Loader />
                    ) : (
                        data && (
                            <>
                                <Image
                                    className="object-contain"
                                    src={data?.generated_image_url as never}
                                    alt="generated image"
                                    width={350}
                                    height={350}
                                    quality={100}
                                />

                                <section className="absolute bg-gradient-to-t from-black/95 to-transparent top-0 w-full h-full">
                                    <Link
                                        onClick={handleDownload}
                                        href={data?.generated_image_url}
                                        className="absolute right-3 top-3 flex items-center justify-center  w-8 h-8 rounded-lg"
                                    >
                                        <Image
                                            src={Download}
                                            width={20}
                                            height={20}
                                            alt="download icon"
                                        />
                                    </Link>
                                </section>
                            </>
                        )
                    )}
                </section>
            </div>
        </div>
    );
}

export default TextPrompt;
