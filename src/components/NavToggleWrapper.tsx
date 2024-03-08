"use client";
import React from "react";
import { useStore } from "@/store";

function NavToggleWrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const navOpen = useStore((state) => state.navOpen);
    return (
        <main
            className={`mx-4 sm:mx-6 md:mx-12 pb-36 ${
                navOpen ? "relative -z-10" : "relative z-10"
            }`}
        >
            {children}
        </main>
    );
}

export default NavToggleWrapper;
