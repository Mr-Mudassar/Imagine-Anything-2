"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import { useStore } from "@/store";
import { AuthPayload } from "@/types";
import { apiClient } from "@/utils/apiClient";
import { loadStripe } from "@stripe/stripe-js";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

type PackagesPlanType = Readonly<{
    title: string;
    amount: number;
    days: number;
    description: string[];
}>;
export default function PlanOffer({
    title,
    amount,
    days,
    description,
}: PackagesPlanType) {
    const setOpenLoginModal = useStore((state) => state.setOpenLoginModal);
    const setPlanType = useStore((state) => state.setPlanType);
    const setIsRemix = useStore((state) => state.setIsRemix);
    const setImageDownloadLimit = useStore(
        (state) => state.setImageDownloadLimit
    );
    const setImageGenerateLimit = useStore(
        (state) => state.setImageGenerateLimit
    );

    const success_url = `${window.location.origin}/?success=true`;
    const cancel_url = `${window.location.origin}/success=false`;
    const setUserData = useStore((state) => state.setUserData);
    const [userInfo, setUserInfo] = useLocalStorage<AuthPayload>("userInfo");

    const returnPriceId = () => {
        if (title === "premium") {
            return "price_1ObQ4bLq5Ym0U1PnhL0YSMUW";
        } else if (title === "deluxe") {
            return "price_1ObQ4vLq5Ym0U1PnFzwOlCZ1";
        } else {
            return "";
        }
    };

    const handleUnsubscribe = () => {
        const data = {
            user_id: userInfo?.user_data?.user_id || null,
            new_plan_type: "free",
            email: userInfo?.user_data?.email || null,
        };
        userUnSubscription(data as any);
    };

    const { mutate: userUnSubscription, isLoading: userUnSubscriptionLoading } =
        useMutation({
            mutationKey: ["user-plan-subscription"],
            mutationFn: async (data) => {
                return apiClient
                    .post(`/change-plan/`, data)
                    .then(({ data }) => {
                        setUserInfo(data);
                        setUserData(data);
                        setPlanType(
                            data?.user_data?.usersubscription?.plan_type
                        );
                        setIsRemix(
                            data?.user_data?.usersubscription?.ability_to_remix
                        );
                        setImageDownloadLimit(
                            data?.user_data?.usersubscription
                                ?.max_download_limit
                        );
                        setImageGenerateLimit(
                            data?.user_data?.usersubscription
                                ?.max_generate_limit
                        );
                    });
            },
        });

    const handleCheckout = async () => {
        localStorage.setItem("plan_name", title);
        const stripe = await loadStripe(
            process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
        );

        const response = await apiClient.post("create-checkout-session/", {
            price_id: returnPriceId(),
            num_days: days || 1,
            success_url: success_url,
            cancel_url: cancel_url,
        });
        const session = await response.data;
        const stripeRes = await stripe?.redirectToCheckout({
            sessionId: session.session_id,
        });

        if (stripeRes?.error) {
            toast.error("Error redirecting to checkout");
        } else {
            toast.success("Checkout completed successfully");
        }
    };

    return (
        <div className="bg-white/5 backdrop-blur-3xl w-full md:w-[320px] py-4 rounded-2xl h-[480px]">
            <header className="flex flex-col gap-y-1 border-b border-yellow/20 px-4 pb-4">
                <h1 className="text-yellow text-4xl font-bold capitalize">
                    {title}
                </h1>
                <div className="flex items-baseline gap-x-1">
                    <span className="text-4xl">$</span>
                    <span className="text-4xl font-bold">{amount}</span>
                    <span className="text-xl">/month</span>
                </div>
            </header>
            <section className="flex flex-col gap-y-6 px-4 pt-4">
                <div className="flex flex-col gap-y-3">
                    {description?.map((desc: string, index: number) => (
                        <div className="flex items-center gap-x-4" key={index}>
                            <span className="bg-yellow w-3 h-3 rounded-full"></span>
                            <span className="text-lg">{desc}</span>
                        </div>
                    ))}
                </div>
                {title !== "free" && (
                    <>
                        {userInfo?.user_data?.usersubscription?.plan_type ===
                        title ? (
                            <button
                                onClick={handleUnsubscribe}
                                disabled={userUnSubscriptionLoading}
                                className="self-center text-xl text-black font-semibold hover:bg-yellow/50 transition-all bg-yellow px-20 py-2 rounded-2xl"
                            >
                                {userUnSubscriptionLoading
                                    ? "Unsubscribing..."
                                    : "Cancel Plan"}
                            </button>
                        ) : (
                            <button
                                onClick={
                                    !userInfo
                                        ? () => setOpenLoginModal(true)
                                        : handleCheckout
                                }
                                className="absolute bottom-10 self-center text-xl text-black font-semibold hover:bg-yellow/50 transition-all bg-yellow px-20 py-2 rounded-2xl"
                            >
                                Select Plan
                            </button>
                        )}
                    </>
                )}
            </section>
        </div>
    );
}
