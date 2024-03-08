"use client";

import ImagineLogo from "@/assets/svgs/logo-primary.svg";
import ScrollTop from "@/assets/svgs/up.svg";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const handleScrollUp = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="flex items-center justify-center fixed bottom-0 z-20 bg-black/80 backdrop-blur-lg h-24 sm:h-16 w-full border-t-1 border-gray-300 px-4 sm:px-6 md:px-12 pt-6 sm:pt-0">
      <button
        onClick={handleScrollUp}
        className="flex items-center justify-center absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-0 w-11 h-11 bg-black/80 backdrop-blur-lg rounded-full cursor-pointer"
      >
        <Image
          src={ScrollTop}
          alt="icon to move top of page"
          className="h-10"
        />
      </button>
      <div className="flex flex-col gap-y-2 sm:flex-row items-center justify-between w-full">
        <Image className="h-8 w-auto" src={ImagineLogo} alt="Your Company" />
        <div className="flex flex-row gap-x-10">
          <Link
            className="text-white text-sm sm:text-xl font-semibold"
            href="/terms-and-conditions"
          >
            Terms & Conditions
          </Link>
          <Link
            className="text-white text-sm sm:text-xl font-semibold"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
