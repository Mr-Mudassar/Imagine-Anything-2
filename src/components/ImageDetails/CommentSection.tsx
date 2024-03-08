"use client";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { apiClient } from "@/utils/apiClient";
import { AuthPayload } from "@/types";
import toast from "react-hot-toast";
import TextButton from "../TextButton";
import { useStore } from "@/store";

interface CommentProps {
    isLoading: boolean;
    userInfo: AuthPayload | null;
    data: any;
    setOpenLoginModal: (value: boolean) => void;
    refetch: () => void;
}

const CommentSection: React.FC<CommentProps> = ({
    isLoading,
    userInfo,
    data,
    setOpenLoginModal,
    refetch,
}) => {
    const queryClient = useQueryClient();
    const [comment, setComment] = useState("");
    const isLogin = useStore((state) => state.isLogin);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isLogin) {
            setOpenLoginModal(true);
        } else {
            await PostComment.mutate({
                text: comment,
            } as any);
        }
    };

    const PostComment = useMutation({
        mutationKey: ["add-comment"],
        mutationFn: async (body) => {
            return apiClient.post(
                `/comment_image/${userInfo?.user_data?.user_id}/${data?.image_id}/`,
                body
            );
        },
        onSuccess: async () => {
            toast.success("Comment Added Successfully");
            refetch();
            queryClient.invalidateQueries([
                "get-user-all-images",
                "get-image-details",
                "get-all-category",
                "get-all-images",
            ]);
            setComment("");
        },
        onError: (err) => {
            toast.error(err as any);
        },
    });

    return (
        <div>
            <div className="flex flex-col gap-y-3">
                <h1 className="text-white font-bold text-2xl">
                    Comments ({data?.comments?.length})
                </h1>
                {isLoading ? (
                    <div role="status" className="max-w-sm animate-pulse">
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                    </div>
                ) : (
                    <div
                        className={`relative overflow-y-auto  flex flex-col gap-y-2 antd-selector-for-user ${
                            data?.comments?.length > 0 ? "h-[200px]" : "h-auto"
                        }`}
                    >
                        {data?.comments?.map((item: any) => (
                            <div
                                className="flex items-start gap-x-6 text-white gap-y-5"
                                key={item.id}
                            >
                                <div className="flex items-center text-2xl font-bold justify-center border border-LightGray rounded-full w-10 h-10">
                                    {item?.username?.split(" ")[0]?.charAt(0)}
                                </div>
                                <div className="">
                                    <h1 className="text-xl font-bold">
                                        {item?.username?.split(" ")[0]}{" "}
                                        {item?.username
                                            ?.split(" ")[1]
                                            ?.charAt(0)}
                                    </h1>
                                    <span className="text-base text-LightGray">
                                        {item?.text}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <form
                className="flex flex-col items-start justify-start w-full gap-y-4 mt-4"
                onSubmit={handleSubmit}
            >
                <textarea
                    id="message"
                    rows={3}
                    className="rounded-md bg-slate-gray  placeholder:text-gray-400 text-white  text-xl w-full p-2 "
                    placeholder="Enter your Comment"
                    required
                    name={"text"}
                    value={comment}
                    onChange={handleChange}
                />
                <TextButton name="Enter" type="submit" />
            </form>
        </div>
    );
};

export default CommentSection;
