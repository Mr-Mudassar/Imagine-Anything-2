import React from "react";

interface TypeImageTextDetails {
    isLoading: boolean;
    data: any;
}
const ImageTextDetails: React.FC<TypeImageTextDetails> = ({
    isLoading,
    data,
}) => {
    return (
        <>
            <div className="">
                <h1 className="text-yellow font-bold text-base">PROMPT</h1>
                {isLoading ? (
                    <div role="status" className="max-w-sm animate-pulse">
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                    </div>
                ) : (
                    <span className="text-base text-white tracking-wide">
                        {data?.prompt_optimized}
                    </span>
                )}
            </div>

            <div>
                <h1 className="text-yellow font-bold text-base">Tags</h1>
                {isLoading ? (
                    <div role="status" className="max-w-sm animate-pulse">
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                    </div>
                ) : data?.caption?.length !== 0 ? (
                    <div className="flex items-center gap-2 flex-wrap">
                        {data?.caption?.map((item: any) => (
                            <span
                                className="bg-white/20 px-2 py-1 text-base rounded-lg text-white"
                                key={item}
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                ) : (
                    <span className="text-base text-white">No Tags</span>
                )}
            </div>
        </>
    );
};

export default ImageTextDetails;
