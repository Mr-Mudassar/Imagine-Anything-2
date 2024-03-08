import React from "react";

type TextButtonProps = {
    name: string;
    type?: "button" | "reset" | "submit";
};

const TextButton = ({ name, type }: Readonly<TextButtonProps>) => {
    return (
        <button
            type={type ? type : "button"}
            className={
                "text-lg font-bold text-white px-8 py-1 rounded-md transition duration-500 primary-btn tracking-wide"
            }
        >
            {name}
        </button>
    );
};

export default TextButton;
