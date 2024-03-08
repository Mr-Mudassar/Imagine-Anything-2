"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Button, message } from 'antd';
import PlusIcon from '../../../../assets/svgs/plus.svg';
import AddCategory from '../../../Modals/AddCategory';
import { useMutation, useQuery } from 'react-query';
import { apiClient } from "@/utils/apiClient";

export default function CategoriesTab() {
  const [isOpen, setIsOpen] = useState(false);
  

  const handleDeleteCategory = (id : any) => {
    deleteCategoryMutate.mutate(id);
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['get-all-category'],
    queryFn: async () => {
      return apiClient
        .get(`/categories/`)
        .then(({data} : any) => data || [])
        .catch((err : any) => console.log(err, "this is error"));
    },
  });

  const deleteCategoryMutate = useMutation({
    mutationKey: ['delete-category'],
    mutationFn: (id) => {
      return apiClient.delete(`/categories/delete/${id}`);
    },
    onSuccess: () => {
      message.success(`Category is successfully deleted`);
      refetch();
    },
    onError: (error, id) => {
      console.log(error);
      message.error(`Failed to delete category with id=${id}`);
    },
  });

  return (
    <div className='flex flex-col border border-gray-600 rounded-2xl text-white'>
      <header className='flex items-center justify-between p-5 border-b border-gray-600'>
        <div className=''>
          <h1 className='text-2xl font-bold'>Categories ({data?.length})</h1>
          <span>Manage Your Categories Here</span>
          <span></span>
        </div>
        <Button type="primary" onClick={() => setIsOpen(true)} className='bg-purple-500/20 border border-purple-600 text-purple-600 font-sans' icon={<Image src={PlusIcon} alt="plus-icon" />}>
          Add Category
        </Button>
      </header>
      {isLoading ? (
        <h1 className='text-center px-8 py-12 text-lg'>loading...</h1>
      ) : (
        <main className='flex flex-col gap-y-4 pb-10'>
          {data?.map(({ categories_id, categories_name } : any) => (
            <section key={categories_id} className='flex justify-between text-xl border-b border-gray-600 p-5'>
              <h1 className=''>{categories_name}</h1>
              <span onClick={() => handleDeleteCategory(categories_id)} className='text-red-600 cursor-pointer uppercase font-bold tracking-widest pr-1  md:pr-8'>
                Remove
              </span>
            </section>
          ))}
        </main>
      )}

      <AddCategory setIsOpen={setIsOpen} isOpen={isOpen} refetch={refetch}  />
    </div>
  );
}
