"use client";

import { useRouter } from "next/navigation";
import BackIcon from "@/assets/svgs/back.svg";
import BackDoubleIcon from "@/assets/svgs/back-double.svg";
import Loader from "@/components/Loader";
import PlanOffer from "@/components/PlanOffer";
import { usePaymentPlansQuery } from "@/services";
import Image from "next/image";
import Link from "next/link";

type TypePackagesPlan = Readonly<{
    payment_id: number;
    plan_type: string;
    amount: number;
    number_of_days: number;
    description: string[];
}>;

export default function Subscriptions() {
    const Router = useRouter();
    const { data, isLoading } = usePaymentPlansQuery();
    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="relative flex flex-col w-full gap-y-6 items-center justify-center text-white pb-20 md:pb-0">
                    {/* <Link href="/">
                        <Image
                            alt="back icon"
                            src={BackIcon}
                            className="absolute left-0 top-12 cursor-pointer !w-[25px] md:w-full "
                        />
                    </Link> */}

                    <button className="flex text-md md:text-2xl absolute left-0 top-2 md:top-12 cursor-pointer !w-[25px] md:w-full" onClick={() => Router.back()}>
                        <Image
                            alt="back icon"
                            src={BackDoubleIcon}
                            className="text-white mr-1 mb-[2px] w-[10px] md:w-full"
                        />
                        Back
                    </button>

                    <div className="flex flex-col text-center pt-12">
                        <h1 className="text-3xl md:text-4xl font-semibold">
                            Unlock Imagine Anything
                        </h1>
                        <span className="text-xl md:text-2xl font-normal">
                            Pick The Plan That Is Best For You
                        </span>
                    </div>
                    <div className="flex flex-wrap w-full gap-y-5 items-start gap-x-5 justify-center h-full pb-10">
                        {data?.map(
                            ({
                                payment_id,
                                plan_type,
                                amount,
                                number_of_days,
                                description,
                            }: TypePackagesPlan) => (
                                <PlanOffer
                                    key={payment_id}
                                    title={plan_type}
                                    amount={amount}
                                    days={number_of_days}
                                    description={description}
                                />
                            )
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
