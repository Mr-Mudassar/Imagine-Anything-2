"use client";

import BulbIcon from "@/assets/svgs/bulb.svg";
import HambergerIcon from "@/assets/svgs/hamberger.svg";
import ImagineLogo from "@/assets/svgs/logo-primary.svg";
import PremiumIcon from "@/assets/svgs/premium.svg";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BtnWithIcon from "./BtnWithIcon";
import GoogleLogin from "./GoogleLogin";
import MobileMenu from "./MobileMenu";
import UserDropdown from "./UserDropdown";

export default function Navbar() {
    const pathname = usePathname();
    const setOpenLoginModal = useStore((state) => state.setOpenLoginModal);
    const openLoginModal = useStore((state) => state.openLoginModal);
    const isLogin = useStore((state) => state.isLogin);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {},[])
    const userInfo = useStore((state) => state.userData);
    const userData = useLocalStorage("userInfo")[0];
    useEffect(() => {userInfo}, [isLogin, userInfo, userData]);
    const setNavOpen = useStore((state) => state.setNavOpen);

    return (
        <div
            className={`w-full z-20 flex items-center justify-between border-b-[1px] bg-black/80 backdrop-blur-lg border-SlateGray py-4 md:py-5 px-4 sm:px-6 md:px-12`}
        >
            <div className="flex items-center gap-x-10">
                <Link href={"/"}>
                    <Image
                        src={ImagineLogo}
                        alt="imagin-anything-logo"
                        className="flex items-center gap-x-2 cursor-pointer"
                    />
                </Link>

                <Link
                    className={`hidden lg:block text-2xl font-semibold ${
                        pathname === "/contact-us"
                            ? "!text-purple-400"
                            : "text-white"
                    }`}
                    href={"/contact-us"}
                >
                    Contact Us
                </Link>
                <Link
                    className={`hidden lg:block text-2xl font-semibold ${
                        pathname === "/faqs" ? "!text-purple-400" : "text-white"
                    }`}
                    href={"/faqs"}
                >
                    FAQ&apos;s
                </Link>
            </div>

            <div
                className="block lg:hidden"
                onClick={() => {
                    setIsOpen(true);
                    setNavOpen(true);
                }}
            >
                <Image src={HambergerIcon} alt="HambergerIcon" />
            </div>
            <div className="hidden lg:flex items-center gap-x-4 ">
                {pathname?.split("/")[1] === "user" ? (
                    <div className="flex items-center justify-center gap-x-2 font-alumniRegular bg-white/10 backdrop-blur-xl py-1 rounded-md px-6 text-base font-bold">
                        <div className="text-2xl text-yellow capitalize">
                            <Link
                                href="/subscriptions-offers"
                                className="capitalize"
                            >
                                {" "}
                                {userInfo?.user_data?.usersubscription?.plan_type}
                            </Link>
                        </div>
                    </div>
                ) : (
                    <>
                        <BtnWithIcon icon={BulbIcon}>
                            <Link href="/generate-images">Generate Image </Link>
                        </BtnWithIcon>

                        {userInfo ? (
                            <div className="flex items-center justify-center gap-x-2  bg-white/10 backdrop-blur-xl rounded-md py-1 px-6 text-base font-bold">
                                <Link
                                    href="/subscriptions-offers"
                                    onClick={()=> setNavOpen(false)}
                                    className="text-2xl text-yellow capitalize"
                                >
                                    {
                                        userInfo?.user_data?.usersubscription
                                            .plan_type
                                    }
                                </Link>
                            </div>
                        ) : (
                            <Link
                                href="/subscriptions-offers"
                                onClick={()=> setNavOpen(false)}
                                className="flex items-center justify-center rounded-md py-2 !px-[20px] text-base font-bold bg-white/10 backdrop-blur-xl"
                            >
                                <Image src={PremiumIcon} alt="premium icon" />
                            </Link>
                        )}
                    </>
                )}
                {userInfo && userData ? (
                    <UserDropdown
                        id={userInfo?.user_data?.user_id}
                        name={userInfo.user_data?.username}
                    />
                ) : (
                    <button
                        onClick={() => setOpenLoginModal(true)}
                        className="flex items-center justify-center primary-btn py-2 px-2 text-base font-bold"
                    >
                        SignIn / SignUp
                    </button>
                )}
            </div>
            <GoogleLogin
                setIsOpen={setOpenLoginModal}
                isOpen={openLoginModal}
            />
            <MobileMenu
                userInfo={userInfo}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </div>
    );
}
