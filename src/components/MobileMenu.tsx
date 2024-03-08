import { useRouter } from "next/navigation";
import { useStore } from "@/store";
import { Fragment, useState } from "react";
import profile from "@/assets/images/profile.png";
import BulbIcon from "@/assets/svgs/bulb.svg";
import ImagineLogo from "@/assets/svgs/logo-primary.svg";
import PremiumIcon from "@/assets/svgs/premium.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Cross from "@/assets/svgs/Cross.svg";

type PropType = {
    userInfo: any;
    isOpen: boolean | undefined;
    setIsOpen: (val: boolean) => void;
};


export default function MobileMenu({ userInfo, isOpen, setIsOpen }: PropType) {
    const { pathname }: any = usePathname();
    const isLogin = useStore((state) => state.isLogin);
    const setIslogin = useStore((state) => state.setIsLogin);
    const userData = useStore((state) => state.userData);
    const setUserData = useStore((state) => state.setUserData);
    const setOpenLoginModal = useStore((state) => state.setOpenLoginModal);
    const setNavOpen = useStore((state) => state.setNavOpen);
    const router= useRouter()

    const onClose = () => {
        setIsOpen(false);
        setNavOpen(false);
    };

    const handleLogin = () => {
        setOpenLoginModal(true);
    };

    const handleLogout = () => {
        window.localStorage.clear();
        setUserData(undefined);
        setIslogin(false);
        setNavOpen(false)
        router.push("/")
    };

    return (
        <div
            className={`fixed top-0 left-0 h-auto w-full bg-gradient-to-r from-slate-900 to-slate-700 z-50 ${
                isOpen ? "block" : "hidden"
            }`}
        >
            <div className="flex justify-between p-4 relative z-50">
                <Link href={"/"}>
                    <Image
                        src={ImagineLogo}
                        alt=""
                        className="flex items-center gap-x-2 cursor-pointer"
                    />
                </Link>
                <button onClick={onClose} className="text-white">
                    <Image
                        src={Cross}
                        width={20}
                        height={20}
                        alt="cross icon"
                    />
                </button>
            </div>
            <div className="flex flex-col items-start gap-y-4 p-4 relative z-50">
                <Link
                    href="/contact-us"
                    onClick={onClose}
                    className={`text-lg md:text-2xl font-semibold ${
                        pathname === "/contact-us"
                            ? "text-purple-400"
                            : "text-white"
                    }`}
                >
                    Contact Us
                </Link>
                <Link
                    href="/faqs"
                    onClick={onClose}
                    className={`text-lg md:text-2xl font-semibold ${
                        pathname === "/faqs" ? "text-purple-400" : "text-white"
                    }`}
                >
                    FAQs
                </Link>
                <Link
                    href="/generate-images/generating-from-prompt"
                    onClick={onClose}
                    className="w-full flex items-center justify-center py-5 px-9 text-sm sm:text-base font-bold bg-purple-500 text-white rounded-md"
                >
                    <Image src={BulbIcon} alt="bulbicon" />
                    <span className="ml-2">Generate Image</span>
                </Link>
                {isLogin ? (
                    <Link
                        href="/subscriptions-offers"
                        onClick={onClose}
                        className="w-full flex items-center justify-center gap-x-2 font-semibold bg-white bg-opacity-10 backdrop-blur-xl py-6 px-6 text-base  rounded-md"
                    >
                        <span className="text-2xl text-yellow-500 capitalize  text-white">
                            {
                                userData?.user_data.usersubscription
                                    .plan_type as string
                            }
                        </span>
                    </Link>
                ) : (
                    <Link
                        href="/subscriptions-offers"
                        onClick={onClose}
                        className="w-full flex items-center justify-center py-[20px] text-base font-bold  rounded-md"
                    >
                        <Image
                            src={PremiumIcon}
                            width={20}
                            height={20}
                            alt="premium icon"
                        />
                    </Link>
                )}
                {userInfo ? (
                    <Fragment>
                        <div className="relative cursor-pointer w-full flex ">
                            <div className="flex items-center gap-x-4">
                                <Image
                                    className="rounded-full w-10 h-10"
                                    src={profile}
                                    alt="user picture"
                                />
                                <div className="flex flex-col items-start">
                                    <span className="font-bold text-white text-base md:text-lg">
                                        {userInfo?.user_data?.username}
                                    </span>
                                    <span className="text-sm md:text-xl text-purple-500 font-bold -mt-2">
                                        User
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="text-lg font-semibold text-white"
                        >
                            Logout
                        </button>
                    </Fragment>
                ) : (
                    <button
                        onClick={handleLogin}
                        className="w-full text-white text-base font-bold bg-purple-500 py-5 px-2 rounded-md"
                    >
                        Sign In / Sign Up
                    </button>
                )}
            </div>
        </div>
    );
}
