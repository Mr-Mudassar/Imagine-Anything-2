"use client"
import React, { useEffect, useState } from 'react';
import { Button, Spin, Upload, message } from 'antd';
import debounce from 'lodash/debounce';
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from 'react-query';

import { useInView } from 'react-intersection-observer';

import { useStore } from '../../../../store/index';
import PlusIcon from '../../../../assets/svgs/plus.svg';
import DeleteIcon from '../../../../assets/svgs/delete.svg';
import { apiClient } from '@/utils/apiClient';
import Image from 'next/image';

export default function ImagesTab() {
  const queryClient = useQueryClient();
  const { ref, inView } = useInView();

  //* =========================================================
  //*                     Local State
  //* =========================================================
  const [fileName, setFileName] = useState('');
  const [loadingImages, setLoadingImages] = useState(false);
  const [hasScrollAbove90, setHasScrollAbove90] = useState(false);
  const [originalCsvLength, setOriginalCsvLength] = useState(0);
  const [imageId, setImageId] = useState('');
  const [filters, setFilters] = useState({
    page: 1,
    page_size: 20,
  });

  const { adminAllImages, setAdminAllImages, adminFetchAllData, setAdminFetchAllData }: any = useStore();
  // console.log('🚀 ~ file: ImagesTab.jsx:27 ~ ImagesTab ~ adminAllImages:', adminAllImages);

  //* =========================================================
  //*                       Handlers
  //* =========================================================
  const handleScroll = debounce(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const scrollPercentage = +((scrollTop / (scrollHeight - clientHeight)) * 100).toFixed(1);
    console.log(scrollPercentage > 90, hasScrollAbove90, adminFetchAllData);

    if (scrollPercentage > 90 && !hasScrollAbove90 && !adminFetchAllData) {
      setHasScrollAbove90(true);
      setFilters((state) => ({
        ...state,
        page: state.page + 1,
      }));
    } else if (scrollPercentage < 90 && hasScrollAbove90) {
      setHasScrollAbove90(false);
    }
  }, 200);

  //* =========================================================
  //*                        API's
  //* =========================================================

  //* =========================================================
  //*                     File Props
  //* =========================================================
  const props = {
    onChange({ file, fileList }: any) {
      console.log('Props function fired')
      if (file.status !== 'uploading') {
        setFileName(fileList[0]?.name);
        const formData = new FormData();
        formData.append('file', fileList[0]?.originFileObj);
        upload_CSV_Mutation.mutateAsync(formData as any);
      }
    },
  };

  const upload_CSV_Mutation = useMutation({
    mutationKey: ['upload-csv'],
    mutationFn: async (data) => {
      const resp = await apiClient.post(`/process-csv/`, data);
      setOriginalCsvLength(resp?.data?.response?.length || 0);
      return resp; // <-- Make sure to return the response
    },
    onSuccess: async ({ data }) => {
      setLoadingImages(true);
      const generateImagePromises = data?.response?.map(async (prompt: any) => {
        try {
          const result = await apiClient.post(`/generate-image/`, { prompt });

          if (result) {
            setOriginalCsvLength((prev) => prev - 1);
          }
          const newImage = {
            imageId: result?.data?.image_id,
            imageUrl: result?.data?.generated_image_url,
          };

          setAdminAllImages([newImage, ...adminAllImages]);
        } catch (error) {
          console.error('Error in generate-image API call', error);
        }
      });
      await Promise.all(generateImagePromises);
      setLoadingImages(false);
    },
  });

   console.log(originalCsvLength, "original length")

  // useQuery({
  //   queryKey: ['get-all-images', filters],
  //   queryFn: () => {
  //     return apiClient.get(`/categories/all/images/`, {
  //       params: filters,
  //     });
  //   },
  //   onSuccess: ({ data }) => {
  //     console.log(adminAllImages.length + data?.results?.length, data?.count);

  //     if (adminAllImages.length + data?.results?.length >= data?.count) {
  //       setAdminFetchAllData(true);
  //     }
  //     const allImages = data?.results?.map((imageDetails) => ({
  //       ...imageDetails,
  //       imageId: imageDetails.image_id,
  //       imageUrl: imageDetails.image_path,
  //     }));

  //     const sortedData = allImages.sort((a, b) => b.image_id - a.image_id);
  //     setAdminAllImages([...adminAllImages, ...sortedData]);
  //   },
  //   onError: (err) => {
  //     console.log(err);
  //   },
  //   staleTime: 60000,
  //   enabled: !adminFetchAllData,
  // });
  //* =========================================================
  //*                    useEffect State
  //* =========================================================
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [hasScrollAbove90]);

  // ==========================================================
  // ==========================================================
  // ==========================================================
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    // fetchPreviousPage,
    // hasPreviousPage,
    // isFetchingPreviousPage
  } = useInfiniteQuery({
    queryKey: ['get-all-images'],
    queryFn: ({ pageParam = 1 }) => {
      return (
        apiClient.get(`categories/all/images/?page=${pageParam}&page_size=10`)
          .then(({ data }) => data)
      )
    },
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages?.length ? allPages?.length + 1 : undefined
      return nextPage
    },
    getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
  })
  // console.log("🚀 ~ ImagesTab ~ data:XXXXXXXXXXXXXXXXXX", data)

  //=============triggering when it comes in view============================
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, fetchNextPage])

  // console.log("🚀 ~ ImagesTab ~ data:XXXXXXXXXXXXXXX", data)

  // ==========================================================
  // DELETE AN IMAGE
  // ==========================================================

  const DeleteImage = useMutation({
    mutationKey: ['delete-image-by-id'],
    mutationFn: async (id) => {
      return apiClient.delete(`/delete-image/${id}/`);
    },
    onSuccess: () => {
      message.success('Image successfull deleted');
      queryClient.invalidateQueries('get-all-images');
    },
    onError: (err) => {
      message.error('Failed to delete image');
      //   console.log('Error in Updating', err);
    },
  });


  return (
    <div className='flex flex-col border border-gray-600 rounded-2xl w-full text-white'>
      <header className='flex items-center justify-between p-5 border-b border-gray-600'>
        <div className=''>
          <h1 className='text-2xl font-bold'>{`Images (${data?.pages[0]?.count})`}</h1>
          <span>Generate Images By Uploading Prompts</span>
        </div>
        <Upload {...props} multiple={true}>
          <Button type="primary" className='bg-purple-500/20 border border-purple-600 text-purple-600 font-sans'>
            <Image src={PlusIcon} alt='plus-icon' className='mr-2 !text-purple-600'  />  Upload .csv
          </Button> 
        </Upload>
      </header>

      <main className='p-2 md:p-5 flex flex-col gap-y-4 w-full'>
        {fileName && (
          <section className='flex justify-between text-xl'>
            <h1 className=''>{fileName ? fileName : 'New Promt files.csv'}</h1>
            <h1 className='text-yellow'>Generate Images</h1>
          </section>
        )}
        <section className='w-full grid gap-x-2 md:gap-x-5 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
          {loadingImages &&
            Array.from({ length: originalCsvLength }).map((_, index) => (
              <div key={index}
                role='status'
                className='w-full h-[205px] border border-gray-200 relative overflow-hidden rounded-xl shadow animate-pulse  dark:border-gray-700'>
                <div className='flex items-center h-full justify-center bg-yellow rounded dark:bg-gray-700'>
                  <svg
                    className='w-10 h-10 text-gray-200 dark:text-gray-600'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 16 20'>
                    <path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z' />
                    <path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
                  </svg>
                </div>
              </div>
            ))}
          {data?.pages?.map((card, index) => (
            card?.results?.map((el: any, id: any) => (
              <div key={el?.image_id} className='relative overflow-hidden rounded-xl h-[205px] select-none'>
                <Image className='h-full w-full  object-cover' key={el?.image_id} src={el?.image_path} alt={el?.image_id} width={400} height={400} />
                <div className='absolute bg-gradient-to-b from-black/80 to-transparent top-0 w-full h-full z-20'>
                  <Button
                    loading={DeleteImage.isLoading && DeleteImage.variables === el?.image_id}
                    icon={<Image src={DeleteIcon} alt='alt-icon' />}
                    onClick={() => {
                      setImageId(el?.image_id);
                      DeleteImage?.mutate(el?.image_id);
                    }}
                    className='absolute right-3 top-3 flex items-center justify-center w-8 h-8 rounded-lg bg-black/50 backdrop-blur-xl'
                  />
                  {/* <div
                    onClick={() => {
                      setImageId(el?.image_id);
                      DeleteImage?.mutate(el?.image_id);
                    }}
                    className='absolute z-40 right-4 top-2 cursor-pointer'>
                    <DeleteIcon />
                  </div> */}
                </div>
              </div>
            ))
          ))}
        </section>
        <div ref={ref} className="flex items-center w-full justify-center">
          {isFetchingNextPage && <Spin />}
        </div>
      </main>
    </div>
  );
}
