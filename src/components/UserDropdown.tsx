"use client";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import profile from "../assets/images/profile.png";
import { useStore } from "@/store";
import Link from "next/link";
import toast from "react-hot-toast";

interface UserDropdownProps {
    id: number;
    name: string;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ id, name }) => {
    const setIsLogin = useStore((state) => state.setIsLogin);
    const setUserData = useStore((state) => state.setUserData);
    const setNavOpen = useStore((state) => state.setNavOpen); 
    const router = useRouter(); 

    const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsLogin(false);
        setUserData(undefined);
        window.localStorage.clear();
        setNavOpen(false);
        router.push("/");
        toast.success("Logout Successfully")
    };

    return (
        <Menu>
            <Menu.Button
                className="flex items-center gap-x-2 cursor-pointer relative z-50"
                onClick={() => setNavOpen(true)} 
            >
                <Image
                    className="rounded-full w-[36px] h-[37px] border-[1px] border-white"
                    src={profile}
                    alt="user picture"
                />
                <div className="flex flex-col items-start ">
                    <span className="font-bold text-[20px] text-white">
                        {name}
                    </span>
                    <span className="text-purple capitalize -mt-2 text-[14px] text-purple-600 text-lg">
                        User
                    </span>
                </div>
            </Menu.Button>
            <Menu.Items className="absolute right-6 top-10 mt-2 bg-white h-18 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <Menu.Item>
                    {({ active }) => (
                        <Link
                            href={`/user/${id}`}
                            onClick={() => setNavOpen(false)} 
                            className={`${
                                active ? "bg-gray-100" : ""
                            }  items-center gap-x-2 cursor-pointer pt-3 pb-1 px-4 text-black block rounded-lg hover:bg-gray-200 text-lg`}
                        >
                            {name}
                        </Link>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <button
                            onClick={handleLogout}
                            className={`${
                                active ? "bg-gray-100 w-full hover:!text-black" : ""
                            } flex items-center gap-x-2 cursor-pointer pt-1 pb-3 rounded-lg  px-4 text-black text-lg`}
                        >
                            Logout
                        </button>
                    )}
                </Menu.Item>
            </Menu.Items>
        </Menu>
    );
};

export default UserDropdown;
