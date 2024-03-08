import Image from "next/image";
import RemixIcon from "@/assets/svgs/Remix.svg";
import Download from "@/assets/svgs/Download.svg";
import Share from "@/assets/svgs/Share.svg";
import LikeFill from "@/assets/svgs/like-fill.svg";
import Like from "@/assets/svgs/Like.svg";
import Comment from "@/assets/svgs/Comment.svg";
import { AuthPayload } from "@/types";
import toast from "react-hot-toast";
import { useStore } from "@/store";
import { useMutation } from "react-query";
import { apiClient } from "@/utils/apiClient";
import { redirect } from "next/navigation";
import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TelegramShareButton,
    TelegramIcon,
    EmailShareButton,
    EmailIcon,
} from "react-share";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "@headlessui/react";
import Link from "next/link";

interface ImageSectionProps {
    isLoading: boolean;
    userInfo: AuthPayload;
    data: any;
    refetch: () => void;
}

const ImageSection: React.FC<ImageSectionProps> = ({
    isLoading,
    userInfo,
    data,
    refetch,
}) => {
    const pathname = usePathname();
    const imageDownloadLimit = useStore((state) => state.imageDownloadLimit);
    const setImageDownloadLimit = useStore(
        (state) => state.setImageDownloadLimit
    );
    const isRemix = useStore((state) => state.isRemix);
    const isLogin = useStore((state) => state.isLogin);
    const setOpenLoginModal = useStore((state) => state.setOpenLoginModal);
    const navigate = useRouter();

    const handleDownload = (e: { preventDefault: () => void }) => {
        if (!isLogin) {
            e.preventDefault();
            setOpenLoginModal(true);
            return;
        }
        if (imageDownloadLimit > 0) {
            Decrementer.mutate({
                user_id: userInfo?.user_data?.user_id,
                action: "image_download",
            } as any);
            return;
        } else if (imageDownloadLimit == 0) {
            e.preventDefault();
            toast.success("Maximum downloads succeeded");
        }
    };

    const Decrementer = useMutation({
        mutationKey: "generate-image-countdown",
        mutationFn: async (data) => {
            const response = await apiClient.post(`/decrement_limit/`, data);
            toast.success(response?.data?.message);
            setImageDownloadLimit(
                response?.data?.user_subscription?.max_download_limit
            );
            return response.data;
        },
    });

    const RemixHandler = () => {
        if (!isLogin) {
            setOpenLoginModal(true);
            return;
        }

        if (!isRemix) {
            toast.error(
                "Remix is only available with the Deluxe Plan, upgrade now"
            );
            navigate.push("/subscriptions-offers");
            return;
        }
    };

    const PostLike = useMutation({
        mutationKey: ["add-like"],
        mutationFn: async (id) => {
            return apiClient.post(
                `/like_image/${userInfo?.user_data?.user_id}/${id}/`
            );
        },
        onSuccess: () => {
            refetch();
        },
        onError: () => {
            toast.error("Updating Failed");
        },
    });

    const items = [
        {
            key: "1",
            label: (
                <FacebookShareButton url={pathname} className="flex  gap-1">
                    <FacebookIcon size={20} round={true} />
                    <span className="!pl-1 !text-black">Facebook</span>
                </FacebookShareButton>
            ),
        },
        {
            key: "2",
            label: (
                <WhatsappShareButton url={pathname} className="flex  gap-1">
                    <WhatsappIcon size={20} round={true} />
                    <span className="!pl-1 !text-black">WhatsApp</span>
                </WhatsappShareButton>
            ),
        },
        {
            key: "3",
            label: (
                <TwitterShareButton url={pathname} className="flex  gap-1">
                    <TwitterIcon size={20} round={true} />
                    <span className="!pl-1 !text-black">Twitter</span>
                </TwitterShareButton>
            ),
        },
        {
            key: "4",
            label: (
                <LinkedinShareButton url={pathname} className="flex  gap-1">
                    <LinkedinIcon size={20} round={true} />
                    <span className="!pl-1 !text-black">Linkedin</span>
                </LinkedinShareButton>
            ),
        },
        {
            key: "5",
            label: (
                <TelegramShareButton url={pathname} className="flex  gap-1">
                    <TelegramIcon size={20} round={true} />
                    <span className="!pl-1 !text-black">Telegram</span>
                </TelegramShareButton>
            ),
        },
        {
            key: "6",
            label: (
                <EmailShareButton
                    url={pathname}
                    body={data?.prompt_optimized}
                    className="flex  gap-1"
                >
                    <EmailIcon size={20} round={true} />
                    <span className="!pl-1 !text-black">Email</span>
                </EmailShareButton>
            ),
        },
    ];

    return (
        <div className="flex flex-col gap-y-4 items-center justify-center md:items-start md:justify-start lg:items-center lg:justify-center">
            <section className="relative items-center !h-auto justify-center overflow-hidden rounded-2xl">
                {isLoading ? (
                    <div className="w-[342px] !md:w-[402px] !h-[370px] border border-gray-200 relative overflow-hidden rounded-2xl shadow animate-pulse  dark:border-gray-700">
                        <div className="flex items-center h-full justify-center rounded">
                            <svg
                                className="w-10 h-10 text-gray-200"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 16 20"
                            >
                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                            </svg>
                        </div>
                    </div>
                ) : (
                    <>
                        <Image
                            className="w-full h-auto object-cover"
                            src={data?.image_path}
                            alt={data?.image_path}
                            width={402}
                            height={100}
                            quality={100}
                        />
                        <section className="absolute bg-gradient-to-t from-black/95 to-transparent top-0 w-full h-full">
                            <Link
                                href={
                                    !isLogin
                                        ? ""
                                        : !isRemix
                                        ? "/subscriptions-offers"
                                        : "/subscriptions-offers"
                                }
                                className={`flex items-center gap-x-2 cursor-pointer absolute left-3 text-white text-lg font-semibold top-3 bg-DeepNightBlack py-2 px-4 rounded-lg ${
                                    !isLogin || !isRemix
                                        ? "pointer-events-none opacity-50"
                                        : ""
                                }`}
                            >
                                <Image
                                    src={RemixIcon}
                                    alt="remix icon"
                                    width={20}
                                    height={20}
                                />{" "}
                                <span>Remix Image</span>
                            </Link>

                            <section className="absolute w-full bottom-5 left-5 ">
                                <div className="flex items-center justify-between gap-x-6 text-xl">
                                    <div className="flex gap-x-3">
                                        {
                                            <button
                                                onClick={() =>
                                                    !isLogin
                                                        ? setOpenLoginModal(
                                                              true
                                                          )
                                                        : PostLike?.mutate(
                                                              data?.image_id
                                                          )
                                                }
                                                className="flex items-center bg-white/20 cursor-pointer px-2 justify-center h-10 rounded-lg gap-x-2 text-white !border-none"
                                            >
                                                {data?.likes?.some(
                                                    (item: any) =>
                                                        item ===
                                                        userInfo?.user_data
                                                            ?.user_id
                                                ) ? (
                                                    <Image
                                                        src={LikeFill}
                                                        alt="LikeFill icon"
                                                        width={20}
                                                        height={20}
                                                    />
                                                ) : (
                                                    <Image
                                                        src={Like}
                                                        alt="Like icon"
                                                        width={20}
                                                        height={20}
                                                    />
                                                )}
                                                <span>
                                                    {data?.likes?.length}
                                                </span>
                                            </button>
                                        }
                                        <button className="flex items-center bg-white/20 cursor-pointer px-2 justify-center h-10 rounded-lg gap-x-2 text-white !border-none">
                                            <Image
                                                src={Comment}
                                                alt="Comment icon"
                                                width={20}
                                                height={20}
                                            />
                                            <span>
                                                {data?.comments?.length}
                                            </span>
                                        </button>
                                    </div>
                                    <div className="mr-10">
                                        <Menu as="div" className="relative">
                                            <Menu.Button className="flex items-center bg-white/20 cursor-pointer w-16 justify-center h-10 rounded-lg gap-x-2 text-white !border-none">
                                                <Image
                                                    src={Share}
                                                    alt="share icon"
                                                    width={20}
                                                    height={20}
                                                />
                                            </Menu.Button>
                                            <Menu.Items className="absolute right-0 bottom-full mt-2 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                {items.map((item) => (
                                                    <Menu.Item key={item.key}>
                                                        {({ active }) => (
                                                            <div
                                                                className={`flex items-center gap-x-2 cursor-pointer py-2 px-2  text-sm ${
                                                                    active
                                                                        ? "bg-gray-100"
                                                                        : ""
                                                                }`}
                                                            >
                                                                {item.label}
                                                            </div>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </Menu.Items>
                                        </Menu>
                                    </div>
                                </div>
                            </section>
                        </section>
                    </>
                )}
            </section>
            <a
                onClick={handleDownload}
                href={data?.image_path}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-x-2 px-6 py-1 bg-[#9C70FF] text-xl text-white rounded-md text-center mt-2"
            >
                Download Image{" "}
                <Image
                    src={Download}
                    alt="download icon"
                    width={12}
                    height={12}
                />
            </a>
        </div>
    );
};

export default ImageSection;
