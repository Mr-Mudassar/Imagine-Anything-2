import React, { useEffect } from "react";
import Image from "next/image";
import Cross from "../../assets/svgs/small-cross.svg";
import { Button, Form, Input, Modal, message, Select } from "antd";
import { useMutation } from "react-query";
import { apiClient } from "@/utils/apiClient";

const AddPackage = ({
    setIsOpen,
    isOpen,
    refetch,
    updateData,
    setUpdateData,
}) => {
    const [form] = Form.useForm();
    const { Option } = Select;

    const onFinishHandler = (values) => {
        if (updateData) {
            if (values?.description) {
                const data = {
                    description: values?.description.split(","),
                };
                updatePackageMutation.mutate(data);
            } else {
                message.error("Description is required");
                return;
            }
        } else {
            if (
                values.plan_type &&
                values.amount &&
                values.number_of_days &&
                values.description
            ) {
                const preparedData = {
                    plan_type: values.plan_type,
                    amount: +values.amount,
                    number_of_days: +values.number_of_days,
                    description: values.description.split(","),
                };
                console.log(preparedData);
                createPackageMutate.mutate(preparedData);
            } else {
                message.error("All Field are required");
            }
        }
    };
    const handleOk = () => {
        form.resetFields();
        setUpdateData(null);
        setIsOpen(false);
    };

    const handleCancel = () => {
        form.resetFields();
        setUpdateData(null);
        setIsOpen(false);
    };

    const createPackageMutate = useMutation({
        mutationKey: ["create-package"],
        mutationFn: (data) => {
            return apiClient.post("/payment-plans/", data);
        },
        onSuccess: () => {
            message.success("Package is successfull created");
            refetch();
            form.resetFields();
            setIsOpen(false);
        },
        onError: (err) => {
            message.error("Failed to Create package");
            console.log(err);
        },
    });

    const updatePackageMutation = useMutation({
        mutationKey: ["update-package"],
        mutationFn: async (data) => {
            return apiClient
                .patch(`/payment-plans/${updateData.payment_id}/`, data)
                .then((response) => {
                    message.success("Package is updated created");
                    refetch();
                    form.resetFields();
                    setIsOpen(false);
                });
        },
    });

    useEffect(() => {
        if (updateData) {
            form.setFieldsValue(updateData);
        } else {
            form.resetFields();
        }
    }, [updateData, form]);

    return (
        <Modal
            closeIcon={<Image src={Cross} alt="small-cross-icon" />}
            className="antd-selector-for-packages-dropdown"
            width={448}
            open={isOpen}
            footer={null}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <Form
                form={form}
                onFinish={onFinishHandler}
                layout="vertical"
                className="flex flex-col items-center  bg-[#141414] p-5"
            >
                {!updateData && (
                    <>
                        <label className="text-white text-center self-start text-[22px] mt-10 pb-2 !text-xl font-bold">
                            Package Title
                        </label>
                        <Form.Item className="w-full" name="plan_type">
                            <Select
                                className="packages-dropdown"
                                defaultValue="Free Users"
                                style={{ width: 200 }}
                            >
                                <Option value="Free Users">Free Users</Option>
                                <Option value="Premium Users">
                                    Premium Users
                                </Option>
                                <Option value="Deluxe Users">
                                    Deluxe Users
                                </Option>
                            </Select>
                        </Form.Item>

                        <label className="text-white text-center self-start text-[22px] pb-2 !text-xl font-bold">
                            Package Price
                        </label>
                        <Form.Item className="w-full" name="amount">
                            <Input
                                type="text"
                                placeholder="Enter package price"
                                required={true}
                                disabled={updateData && true}
                                className="w-full !bg-[#141414] text-white border border-gray-600 placeholder:!text-[#505050] py-2 rounded-xl text-[18px]"
                            />
                        </Form.Item>
                        <label className="text-white text-center self-start text-[22px] pb-2 !text-xl font-bold">
                            Number of days
                        </label>
                        <Form.Item className="w-full" name="number_of_days">
                            <Input
                                type="text"
                                placeholder="Enter number of days"
                                required={true}
                                disabled={updateData && true}
                                className="w-full !bg-[#141414] text-white border border-gray-600 placeholder:!text-[#505050] py-2 rounded-xl text-[18px]"
                            />
                        </Form.Item>
                    </>
                )}

                <label className="text-white text-center self-start text-[22px] pb-2 !text-xl font-bold">
                    Description
                </label>
                <Form.Item className="w-full" name="description">
                    <Input.TextArea
                        type="text"
                        autoSize={false}
                        placeholder="Enter description (comma separated)"
                        className="w-full !bg-[#141414] text-white border border-gray-600 placeholder:!text-[#505050] py-2 rounded-xl text-[18px]"
                        required={true}
                    />
                </Form.Item>

                <div className="flex flex-col w-full gap-y-4">
                    <Button
                        type="tertuary"
                        htmlType="submit"
                        loading={createPackageMutate.isLoading}
                        className="flex items-center justify-center bg-purple-500 w-full text-[20px] hover:!bg-white rounded-xl hover:!text-black text-white py-5"
                    >
                        {updateData ? "Update Package" : "Add package"}
                    </Button>
                    <Button
                        type="secondary"
                        onClick={() => {
                            form.resetFields();
                            setIsOpen(false);
                            setUpdateData(null);
                        }}
                        className="cursor-pointer flex items-center justify-center w-full text-[20px] text-white !border-none"
                    >
                        Cancel
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};

export default AddPackage;
