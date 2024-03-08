import Shadow_LB from "@/assets/svgs/blue-lb.svg";
import Shadow_RT from "@/assets/svgs/orange-rt.svg";
import Shadow_LT from "@/assets/svgs/purple-lt.svg";
import Shadow_RB from "@/assets/svgs/purple-rb.svg";
import Footer from "@/components/Footer";
import NavToggleWrapper from "@/components/NavToggleWrapper";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import StripeLayout from "@/components/StripeLayout";
import { Alumni_Sans } from "next/font/google";


export default function UserLogout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <StripeLayout>
            <div className="fixed left-0 z-[-1]">
                <Image alt="" src={Shadow_LT} className="!h-96 !w-96" />
            </div>
            <div className="fixed top-0 right-0 z-[-1]">
                <Image alt="" src={Shadow_RT} className="!h-96 !w-96" />
            </div>
            <div className="fixed left-0 top-1/2 z-[-1] h-10">
                <Image
                    alt=""
                    src={Shadow_LB}
                    className="!h-[500px] !w-[500px]"
                />
            </div>
            <div className="fixed right-0 top-1/2 h-10">
                <Image
                    alt=""
                    src={Shadow_RB}
                    className="!h-[500px] !w-[500px]"
                />
            </div>
            <Navbar />
            <NavToggleWrapper>{children}</NavToggleWrapper>

            <Footer />
        </StripeLayout>
    );
}
