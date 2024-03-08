import "./globals.css";
import "../styles/custom.scss";
import QueryClientHelper from "@/components/QueryClientHelper";
import { Toaster } from "react-hot-toast";
import { Alumni_Sans } from "next/font/google";

const ilumni = Alumni_Sans({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "600", "700", "900"],
});

export const metadata = {
    title: "Imagine Anything | Free AI Image Generator",
    description:
        "Generate Image, Create Images, AI Images, prompt Images, AI illustrations",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${ilumni.className}`}>
                <QueryClientHelper>
                    {children}
                </QueryClientHelper>
                <Toaster />
            </body>
        </html>
    );
}