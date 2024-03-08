"use client"
import React, { useState } from 'react';
import blue from '../assets/images/belo.png';
import orange from '../assets/images/orange.png';
import pink from '../assets/images/pink.png';
// import Logo from '../assets/svgs/loginLogo.svg';
import Logo from '../assets/images/login-screen-logo.png'
import { useRouter } from 'next/navigation';
import { apiClient } from '@/utils/apiClient';
import Image from 'next/image';
import { useMutation } from 'react-query';
import loader from "../assets/svgs/loader.svg"
import { message } from 'antd'
import { useStore } from '@/store';
import useLocalStorage from '@/hooks/useLocalStorage';
import { AuthPayload } from '@/types';

const Login = () => {
    const setUserData= useStore((state)=>state.setUserData)
    const setUserInfo = useLocalStorage<AuthPayload>("userInfo")[1]
    const router = useRouter();

    const onFinishHandler =  (values: { email: string; password: string }) => {
        if (values.email && values.password) {
            adminLoginMutation.mutateAsync(values)
                .then((admin : any) => {
                    message.success('Admin successfully logged in.');
                    setUserData(admin?.data);
                    setUserInfo(admin?.data)
                    router.push('/image-and-categories');
                })
                .catch((error : any) => {
                    console.error(error);
                    message.error('Invalid email or password');
                });
        } else {
            message.error('email and Password are required');
        }
    };

    const adminLoginMutation = useMutation({
        mutationKey: ['admin-login'],
        mutationFn: (data: { email: string; password: string }) => {
            return apiClient.post(`/superuser/`, data);

        },
    });

    return (
        <div className='relative z-20 h-screen overflow-hidden w-full flex flex-col justify-center items-center admin-login-screen'>
            <Image className='absolute select-none left-0 z-0' src={blue} alt='gradients' />
            <Image className='absolute select-none top-0 right-0 z-0' src={orange} alt='gradients' />
            <Image className='absolute select-none right-0' src={pink} alt='gradients' />

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target as HTMLFormElement);
                    const values = Object.fromEntries(formData.entries()) as { email: string; password: string };
                    onFinishHandler(values);
                }}
                className='flex flex-col bg-[#141414] backdrop-blur-xl w-full sm:w-[500px] px-4 md:px-24 h-[500px] rounded-2xl'
            >
                <div className='flex flex-col justify-center items-center my-6 gap-3'>
                    <Image src={Logo} alt='' />
                    {/* <h1 className='text-white font-extrabold text-[32px]'>IMAGINE ANYTHING</h1> */}
                </div>
                <p className='text-white text-center my-8 text-2xl'>Login As An Admin</p>

                <div className='form-group my-3'>
                    <input
                        name='email'
                        type='text'
                        placeholder='Enter email'
                        className='bg-black text-white border border-gray-600 placeholder-text-[#505050] h-10 text-[18px] w-[100%] px-4'
                    />
                </div>

                <div className='form-group my-3'>
                    <input
                        name='password'
                        type='password'
                        placeholder='Enter Password'
                        className='bg-black text-white border border-gray-600 placeholder-text-[#505050] h-10 w-[100%] px-4'
                    />
                </div>

                <button
                    type='submit'
                    disabled={adminLoginMutation.isLoading}
                    className='flex items-center justify-center w-full bg-fuchsia-400 text-[20px] hover:text-black text-white rounded-lg my-3 py-1 border border-white'
                >
                   {adminLoginMutation.isLoading && <Image src={loader} alt='loader' width={24} height={24}/> } Login
                </button>
            </form>
        </div>
    );
};

export default Login;
