"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Divider, Drawer, Dropdown, Menu, Space, ConfigProvider } from "antd";
import HambergerIcon from "../assets/svgs/hamberger.svg";
import cartoon1 from "../assets/images/cartoon1.png";
import ImagineLogo from "../assets/svgs/logo-primary.svg";
import { usePathname, useRouter } from "next/navigation";
import AdminNav from "../components/Common/AdminNav";
import { useStore } from '@/store';

interface UserInfo {
    authenticated: boolean;
    email?: string;
    username?: string;
}

const navItems = [
    { label: "Images / Categories", key: "/image-and-categories" },
    { label: "Users / Subscribed Users", key: "/users-and-subscribed" },
    { label: "Packages", key: "/packages" },
];

const AdminLayout = ({ children }: any) => {
    const userData = useStore((state) => state.userData);
    const setUserData = useStore((state) => state.setUserData)
    
    const [isOpen, setIsOpen] = useState(false);
    const [isNav, setIsNav] = useState(false);
    const navigate = useRouter();
    const pathname = usePathname();
    
    const items = [
        {
            label: (
                <span
                    className=" text-xl"
                    onClick={() => {
                        setUserData(undefined)
                        navigate.push("/admin/login");
                    }}
                >
                    Logout
                </span>
            ),
            key: "2",
        },
    ];

    const handleMenuClick = (e: any) => {
        // message.info('Click on menu item.');
        console.log("click", e);
    };

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    const showDrawer = () => {
        setIsNav(true);
    };
    const onClose = () => {
        setIsNav(false);
    };

    return (
        <div className='flex flex-row relative min-h-screen  text-white'>
            <ConfigProvider
                theme={{
                    token: {
                        fontFamily: "alumni-regular",
                    },
                }}
            >
                <AdminNav />
                <div className="">
                    <Drawer
                        width={280}
                        closeIcon={<Image src={ImagineLogo} alt="imagin-anything-logo" />}
                        className="!bg-[#141414]"
                        placement="left"
                        onClose={onClose}
                        open={isNav}
                    >
                        {/* <ImagineLogo /> */}
                        <div className="relative flex flex-col gap-y-2 w-[220px] text-base md:text-2xl">
                            {navItems?.map((el) => (
                                <Link
                                    className={`py-1 px-2 w-full text-white ${pathname == el?.key
                                        ? "mr-2 bg-purple-600 before:content-[''] before:h-7 before:w-1 before:bg-purple-400 before:absolute before:left-0"
                                        : ""
                                        }`}
                                    href={el?.key}
                                    key={el.key}
                                >
                                    {el?.label}
                                </Link>
                            ))}
                        </div>
                    </Drawer>
                </div>

                {/* childrens pages */}
                <div className="flex flex-col w-full lg:!ml-[254px]">
                    <section>
                        <div
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative cursor-pointer w-full flex items-center gap-x-6 justify-end px-10 py-3 border-b border-gray-600"
                        >
                            <Dropdown className="h-[50px]" menu={menuProps}>
                                <Button>
                                    <Space className="flex items-center gap-x-4 ">
                                        <div
                                            onClick={() => setIsOpen(!isOpen)}
                                            className="relative cursor-pointer w-full flex items-end justify-end"
                                        >
                                            <div className="flex items-center gap-x-4">
                                                <Image
                                                    className="rounded-full w-10 h-10"
                                                    src={cartoon1}
                                                    alt="user picture"
                                                />
                                                <div className="flex flex-col items-start">
                                                    <span className="font-bold text-white text-lg">
                                                        {(userData as UserInfo)?.email }
                                                    </span>
                                                    <span className="text-xl text-[#9926f8] font-bold -mt-2">
                                                    {(userData as UserInfo)?.username }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Space>
                                </Button>
                            </Dropdown>
                            <span
                                className="block lg:hidden"
                                onClick={() => setIsNav(!isNav)}
                            >
                                <Image src={HambergerIcon} alt="hamburger-icon" />
                            </span>
                        </div>

                        {children}
                    </section>
                </div>
            </ConfigProvider>
        </div>
    );
};
export default AdminLayout;
