import React, { useState } from "react";
import {Modal, message } from "antd";
import Image from "next/image";
import { useMutation } from "react-query";
import { apiClient } from "@/utils/apiClient";
import Cross from "../../assets/svgs/small-cross.svg";

export default function AddCategory({ setIsOpen, isOpen, refetch }) {
    const [categoryData, setCategoryData] = useState("");

    // const onFinishHandler = (values) => {
    //     createCategoryMutate.mutate(values);
    // };

    const handleOk = () => {
        setIsOpen(false);
    };

    const handleCancel = () => {
        setIsOpen(false);
        setCategoryData('')
    };

    //* =========================================
    //*                  API's
    //* =========================================
    const createCategoryMutate = useMutation({
        mutationKey: ["create-mutation"],
        mutationFn: (data) => {
            return apiClient.post("/categories/create/", data);
        },
        onSuccess: () => {
            message.success("Category is created successfully");
            refetch();
            setIsOpen(false);
            setCategoryData('')
        },
        onError: (error) => {
            console.log("Error message from API", error);
            message.error("Category already exist");
        },
    });

    return (
        <Modal
            closeIcon={<Image src={Cross} alt="cross-icon" />}
            className="h-[300px]"
            width={348}
            open={isOpen}
            footer={null}
            onOk={handleOk}
        >
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    createCategoryMutate.mutate({
                        categories_name: categoryData,
                    });
                }}
                layout="vertical"
                className="flex flex-col items-center  bg-[#141414] p-5"
            >
                <label className=" text-white text-center self-start text-[22px] mt-10 pb-2 !text-xl font-bold">
                    Category Name
                </label>

                <input
                    type="text"
                    required
                    placeholder="Enter category name"
                    value={categoryData}
                    onChange={(e) => setCategoryData(e.target.value)}
                    className="w-full !bg-[#141414] text-white border border-gray-600 placeholder:!text-[#505050] py-2 rounded-xl px-4 text-[18px]"
                />

                <div className="flex flex-col w-full gap-y-4 mt-6">
                    <button
                        type="submit"
                        // type="tertuary"
                        loading={createCategoryMutate.isLoading}
                        className="ant-btn-tertuary flex items-center justify-center bg-purple-500 w-full text-[20px] text-white py-2 hover:!bg-[#c779d0] rounded-xl"
                    >
                        Add
                    </button>
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="ant-btn-secondary flex items-center justify-center w-full text-[20px] text-white cursor-pointer"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </Modal>
    );
}
