"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Button, Table, message } from 'antd';
import { useMutation, useQuery } from 'react-query';
import { apiClient } from "@/utils/apiClient";
import { Alumni_Sans } from "next/font/google";
import PlusIcon from '../../../assets/svgs/plus.svg';
import Save from '../../../assets/svgs/edit.svg';
import Delete from '../../../assets/svgs/delete.svg';
import AddPackage from '../../../components/Modals/AddPackage'
const Packages = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [updateData, setUpdateData] = useState(null);

    const handleDelete = (e: any, id: any) => {
        e.stopPropagation();
        PackageDeleteMutate.mutate(id);
    };

    const handleUpdate = (e: any, record: any) => {
        e.stopPropagation();
        setUpdateData(record);
        setIsOpen(true);
    };
    const columns = [
        {
            key: 'id',
            title: 'Id',
            dataIndex: 'payment_id',
            render: (id: any) => <span className='text-white font-medium text-[18px]'>{id}</span>,
        },
        {
            key: 'title',
            title: 'Title',
            dataIndex: 'plan_type',
            render: (title: any) => <span className='text-white font-medium text-[18px]'>{title}</span>,
        },
        {
            key: 'amount',
            title: 'Amount',
            dataIndex: 'amount',
            render: (amount: any) => <span className='text-white font-medium text-[18px]'>{amount}</span>,
        },
        {
            key: 'description',
            title: 'Description',
            dataIndex: 'description',
            render: (description: any) => <span className='text-white font-medium text-[18px]'>{description}</span>,
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (_: any, record: any) => (
                <div className='flex gap-x-4 justify-start items-center'>
                    <span className='font-medium text-[18px] text-[#FF7070] cursor-pointer'>
                        <Image src={Save} alt="save-icon" width={22} height={22} onClick={(e: any) => handleUpdate(e, record)} />
                    </span>
                    <span
                        onClick={(e) => handleDelete(e, record.payment_id)}
                        className='font-medium text-[18px] text-[#FF7070] cursor-pointer'>
                        <Image src={Delete} alt="delete-icon"/>
                    </span>
                </div>
            ),
        },
    ];

    const { data, isLoading, refetch } = useQuery({
        queryKey: ['get-all-package'],
        queryFn: async () => {
            return apiClient
                .get('/payment-plans/')
                .then(({ data }) => data)
                .catch((error) => console.log(error));
        },
    });

    const PackageDeleteMutate = useMutation({
        mutationKey: ['delete-package'],
        mutationFn: (id) => {
            return apiClient.delete(`/payment-plans/${id}`);
        },
        onSuccess: () => {
            message.success('Package Delete successfully');
            refetch();
        },
        onError: (err) => {
            message.error('Failed to delete pacakge');
            console.log(err);
        },
    });

    return (
        <>
            <AddPackage setIsOpen={setIsOpen} isOpen={isOpen} refetch={refetch} updateData={updateData} setUpdateData={setUpdateData} />
            <div className='px-2 md:px-10 py-10 antd-table antd-selector-for-admin '>
                <div className='flex flex-col border border-gray-600 rounded-2xl'>
                    <header className='p-5 flex justify-between items-center'>
                        <div className='text-white'>
                            <h1 className='text-2xl font-bold '>All Package</h1>
                            <span>Manage your packages here</span>
                        </div>
                        <Button type="primary" onClick={() => setIsOpen(true)} className='bg-purple-500/20 border border-purple-600 text-purple-600 font-sans' icon={<Image src={PlusIcon} alt="plus-icon" />}>
                            Add Package
                        </Button>
                    </header>
                    <Table
                        dataSource={data}
                        columns={columns}
                        loading={isLoading}
                        className=' min-w-[350px] overflow-x-auto rounded-2xl border-t border-[#7a7a7a]'
                        pagination={false}
                    />
                </div>
            </div>
        </>
    );
};
export default Packages