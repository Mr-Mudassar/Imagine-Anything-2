import React from "react";
import FaqData from "@/components/FaqData";

export const metadata = {
    title: " FAQ’s | Imagine Anything ",
};

const Page = () => {
    return (
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 py-10 md:py-20 px-5 md:px-20 ">
            <div>
                <div className="flex flex-col text-white">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold ">
                        FAQ&apos;s
                    </h1>
                    <span className="text-2xl">
                        Everything You Need To Know About The
                    </span>
                    <span className="text-2xl">Product & Other Details...</span>
                </div>
            </div>
            <FaqData />
        </div>
    );
};

export default Page;
