import Polygon from "@/assets/svgs/Polygon.svg";
import Close from "@/assets/svgs/close.svg";
import GoogleIcon from "@/assets/svgs/google.svg";
import Logo from "@/assets/svgs/logo-secondry.svg";
import BlueishGradient from "@/assets/svgs/modal-bottom-gradient.svg";
import PurpleGradient from "@/assets/svgs/modal-top-gradient.svg";
import { auth } from "@/firebase";
import useLocalStorage from "@/hooks/useLocalStorage";
import { AuthPayload } from "@/types";
import { apiClient } from "@/utils/apiClient";
// import { BaseURL } from "@/utils/BaseURL";
import { Fragment, useState } from "react";
import { Dialog } from "@headlessui/react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { useStore } from "../store";
import BtnWithIcon from "./BtnWithIcon";
import toast from "react-hot-toast";
import DialogModel from "./DialogModel";

type GoogleLoginType = Readonly<{
    setIsOpen: (data: boolean) => void;
    isOpen: boolean;
}>;

function GoogleLogin({ setIsOpen, isOpen }: GoogleLoginType) {
    const setIsRemix = useStore((state) => state.setIsRemix);
    const setUserData = useStore((state) => state.setUserData);
    const userData = useStore((state) => state.userData);
    const setPlanType = useStore((state) => state.setPlanType);
    const setIsLogin = useStore((state) => state.setIsLogin);
    const navOpen = useStore((state) => state.navOpen);
    const setNavOpen = useStore((state) => state.setNavOpen);
    const setImageGenerateLimit = useStore(
        (state) => state.setImageGenerateLimit
    );
    const setImageDownloadLimit = useStore(
        (state) => state.setImageDownloadLimit
    );

    const closeModel = () => {
        setIsOpen(false);
        setNavOpen(false)
    };

    const setUserInfo = useLocalStorage<AuthPayload>("userInfo")[1];

    const login = async (body: {
        username: string | null;
        email: string | null;
    }) => {
        return apiClient.post('/login/', body).then(({ data }) => {
            setIsLogin(true);
            setUserData(data);
            setUserInfo(data);
            setPlanType(data?.user_data?.usersubscription?.plan_type);
            setIsRemix(data?.user_data?.usersubscription?.ability_to_remix);
            setImageGenerateLimit(
                data?.user_data?.usersubscription?.max_generate_limit
            );
            setImageDownloadLimit(
                data?.user_data?.usersubscription?.max_download_limit
            );

            toast.success("Logged In Successfully!");
            
            if(navOpen){
                setNavOpen(false)
            }
            
            return data as AuthPayload;
        });
    };

    console.log(userData)

    const GoogleAuth = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const res = await signInWithPopup(auth, provider);

            if (!res.user) {
                throw new Error("User cancelled the login process");
            }

            login({
                username: res.user.displayName,
                email: res.user.email,
            });

            closeModel();
        } catch (err: any) {
            if (err.code === "auth/cancelled-popup-request") {
                toast.success("User cancelled the login process");
            } else {
                toast.error(err.message);
            }
        }
    };

    return (
        <DialogModel
            isOpen={isOpen}
            closeModal={closeModel}
            dialogModelSize="wide"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[75vh] mt-[-10px] md:mt-0">
                <section className="flex flex-col gap-3 md:gap-5 items-center justify-center bg-gradient-to-b from-pink-400 to-purple-800 text-white py-4 md:py-6">
                    <div className="w-24 md:w-32 h-16 md:h-20">
                        <Image src={Logo} alt="logo" layout="responsive" />
                    </div>
                    <div className="flex flex-col pl-2 md:pl-4 gap-2 md:gap-4 text-sm md:text-lg ">
                        <div className="flex items-center gap-x-2 md:gap-x-4">
                            <Image
                                src={Polygon}
                                alt="Polygon"
                                width={12}
                                height={12}
                            />
                            <span>AI-powered powerful image generation</span>
                        </div>
                        <div className="flex items-center gap-x-2 md:gap-x-4">
                            <Image
                                src={Polygon}
                                alt="Polygon"
                                width={12}
                                height={12}
                            />
                            <span>Prompt Refine functionality</span>
                        </div>
                        <div className="flex items-center gap-x-2 md:gap-x-4">
                            <Image
                                src={Polygon}
                                alt="Polygon"
                                width={12}
                                height={12}
                            />
                            <span>
                                Unlimited image generation for premium and
                                deluxe users
                            </span>
                        </div>
                        <div className="flex items-center gap-x-2 md:gap-x-4">
                            <Image
                                src={Polygon}
                                alt="Polygon"
                                width={12}
                                height={12}
                            />
                            <span>Supports online model training</span>
                        </div>
                    </div>
                </section>

                <section className="relative flex items-center justify-center w-full h-full pt-10 pb-12 md:pt-14 md:pb-16 md:py-0 bg-gradient-to-r from-slate-900 to-slate-700">
                    <div className="absolute top-0">
                        <Image
                            src={PurpleGradient}
                            alt="PurpleGradient"
                            width={16}
                            height={16}
                        />
                    </div>
                    <div className="absolute bottom-0">
                        <Image
                            src={BlueishGradient}
                            alt="BlueishGradient"
                            width={16}
                            height={16}
                        />
                    </div>
                    <div className="flex items-center flex-col gap-y-2 md:gap-y-3 justify-center relative z-20 ">
                        <h1 className="text-xl md:text-3xl text-white font-bold">
                            Login/Register
                        </h1>
                        <BtnWithIcon
                            icon={GoogleIcon}
                            onClick={GoogleAuth}
                            className="px-4 md:px-6"
                        >
                            Google
                        </BtnWithIcon>
                    </div>
                </section>
            </div>
        </DialogModel>
    );
}

export default GoogleLogin;
