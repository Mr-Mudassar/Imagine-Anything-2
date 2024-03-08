import Comment from "@/assets/svgs/Comment.svg";
import Download from "@/assets/svgs/Download.svg";
import Like from "@/assets/svgs/Like.svg";
import LikeFill from "@/assets/svgs/like-fill.svg";
import useLocalStorage from "@/hooks/useLocalStorage";
import { AuthPayload, ImageData } from "@/types";
import Image from "next/image";

type SocialCardProps = Readonly<{
    data: ImageData;
    innerRef?: React.RefObject<HTMLDivElement>;
}>;

export default function SocialCard({ data, innerRef }: SocialCardProps) {
    const [userInfo] = useLocalStorage<AuthPayload>("userInfo");

    return (
        <div
            ref={innerRef}
            className="relative items-center justify-center h-[320px] overflow-hidden rounded-2xl"
        >
            <Image
                className="h-full w-full object-cover"
                src={data?.image_path}
                alt={data?.image_path}
                width={400}
                height={100}
                quality={100}
            />
            <section className="absolute bg-gradient-to-t from-black/95 to-transparent top-0 w-full h-full">
                <section className="absolute right-3 top-3 flex items-center justify-center  w-8 h-8 rounded-lg bg-purple-400 p-2">
                    <Image
                        src={Download}
                        alt="Download"
                        width={20}
                        height={20}
                    />
                </section>

                <section className="absolute w-fulll left-1/2 top-[90%] -translate-x-1/2 -translate-y-1/2  text-white socails">
                    <div className="flex items-center justify-center gap-x-10 text-xl">
                        <div className="flex items-center gap-x-2">
                            {data?.likes?.some(
                                (el) =>
                                    Number(el) === userInfo?.user_data?.user_id
                            ) ? (
                                <Image src={LikeFill} alt="LikeFill" />
                            ) : (
                                <Image src={Like} alt="Like" />
                            )}
                            <span>{data?.likes?.length}</span>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <Image src={Comment} alt="comment" />
                            <span>{data?.comments?.length}</span>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}
