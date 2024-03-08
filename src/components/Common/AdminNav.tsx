import Image from 'next/image';
import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import ImagineLogoBig from '../../assets/svgs/logo-primary.svg'
import ImagineLogoSmall from '../../assets/svgs/imagine-logo.svg';
import { Button, Divider, Drawer, Dropdown, Menu, Space } from 'antd';

type SelectedKeys = string[] | undefined; // Define a custom type for selectedKeys

const items = [
    { label: <span className=' text-xl font-semibold text-white px-3'>Images / Categories</span>, key: '/image-and-categories' },
    { label: <span className=' text-xl font-semibold text-white px-3'>Users / Subscribed Users</span>, key: '/users-and-subscribed' },
    { label: <span className=' text-xl font-semibold text-white px-3'>Packages</span>, key: '/packages' },
];

const activeRoute = (pathname: any) => {
    switch (pathname) {
        case 'image-and-categories':
            return '/image-and-categories';
        case 'users-and-subscribed':
            return '/users-and-subscribed';
        case 'packages':
            return '/packages';

        default:
            return undefined;
    }

};
export default function AdminNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isNav, setIsNav] = useState(false)
    const navigate = useRouter();

    const location = usePathname();
    const pathname = location?.split('/')[2];

    const [collapsed, setCollapsed] = useState(false);
    // const toggleCollapsed = () => {
    //   setCollapsed(!collapsed);
    // };



    return (
        <div
            className={`hidden lg:flex flex-col fixed transition-all duration-500 h-screen !border-r ${collapsed ? 'w-[81px]' : 'w-[254px]'
                } portal-sidebar `}>
            {collapsed ? (
                <div className='flex items-center h-24'>
                    <Image src={ImagineLogoSmall} alt='imagin-anything-logo' />
                </div>
            ) : (
                <div className='flex flex-col gap-y-2 items-center justify-center h-32'>
                    <Image src={ImagineLogoBig} alt='imagin-anything-logo' />
                </div>
            )}
            <Menu
                className=''
                onClick={({ key }) => {
                    navigate.push(key);
                }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode='inline'
                inlineCollapsed={collapsed}
                items={items}
                selectedKeys={activeRoute(pathname) as SelectedKeys} // Using type assertion
            />
        </div>
    )
}
