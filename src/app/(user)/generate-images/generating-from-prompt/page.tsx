import Link from "next/link";
import React from "react";
import TextButton from "@/components/TextButton";

function page() {
    return (
        <div className="flex flex-col gap-5 justify-center items-center mt-10">
            <div className="text-center">
                <h1 className="text-[60px] text-white">
                    GENERATE <span className="text-[#FF9970]">AI </span>
                    <span className="text-[#FE70FF]">IMAGE </span>FROM{" "}
                    <span className="text-[#FE70FF]"> PROMPT </span>
                    <br />
                    IN JUST ONE CLICK
                </h1>
            </div>
            <p className="text-white text-center w-[50%]">
                Create awe-inspiring masterpieces effortlessly and explore the
                endless possibilities of AI generated art. Enter a prompt & hit
                generate and boom it’s done
            </p>

            <Link
                href="/generate-images"
                className="flex text-[#C0C0C0] justify-between items-center bg-white h-[80px] rounded-md w-[60%] p-5 cursor-pointer"
            >
                Write a prompt seperated by comma and click generate
                <TextButton name="Generate" />
            </Link>
        </div>
    );
}

export default page;
