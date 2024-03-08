"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Select, Table, message } from "antd";
import { useMutation, useQuery } from "react-query";
import { apiClient } from "@/utils/apiClient";
import FilterIcon from "../../../assets/svgs/filters.svg";
import { tableFilter } from "../../../constants/constants";
import { debounce } from "lodash";
// import { useStore } from "zustand";
// import useStore from "../../../store/index";

export default function SubscribedUsers() {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubscription, setSelectedSubscription] = useState("all");
  const [toggleAccess, setToggleAccess] = useState(false);
  //   const { toggleAccess, setToggleAccess } = useStore();
  //* =============================================
  //*                 Delete User
  //* =============================================
  const deleteUser = (id: any) => {
    console.log(id);
    deleteUserMutate.mutate(id);
  };

  const handleChange = (value: any) => {
    setSelectedSubscription(value);
  };

  const handleSearch = debounce((value) => {
    setSearchQuery(value);
  }, 500);

  const onPageChange = (page: any) => {
    console.log(page);
    setPageNumber(page);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "username",
      key: "username",
      render: (username: any) => (
        <span className="text-white  font-medium text-[18px]">
          {username}
        </span>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (email: any) => (
        <span className="text-white  font-medium text-[18px]">
          {email}
        </span>
      ),
    },
    {
      title: "Subscription",
      dataIndex: "subscription",
      key: "subscription",
      render: (subscription: any, record: any) => (
        <Button
          type="primary"
          className={`text-white ${record?.usersubscription?.plan_type === "free"
              ? "bg-white/10 border-gray-600 backdrop-blur-3xl"
              : "primary-btn"
            } !py-1 !px-5 !rounded-xl text-base font-bold`}
        >
          {record?.usersubscription?.plan_type}
        </Button>
      ),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_: any, record: any) => (
        <span
          onClick={() => deleteUser(record.user_id)}
          className=" font-medium text-[18px] text-[#FF7070] cursor-pointer"
        >
          Remove
        </span>
      ),
    },
  ];

  //* ===========================================
  //*               Delet User API
  //* ===========================================

  const deleteUserMutate = useMutation({
    mutationKey: ["delete-user"],
    mutationFn: async (id) => {
      return apiClient
        .delete(`/users/delete/${id}/`)
        .then(() => {
          message.success("User is successfully deleted");
          refetch();
        })
        .catch((error: any) => {
          console.log(error);
          message.error(`Failed to delete the user with id=${id} `);
        });
    },
  });
  //* ===========================================
  //*               Get User API
  //* ===========================================
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["get-users", pageNumber, selectedSubscription, searchQuery],
    queryFn: async () => {
      return apiClient
        .get(`/users/all/`, {
          params: { page: pageNumber },
        })
        .then(({ data }) => {
          const structured_data = data?.map((data: any) => ({
            ...data,
            subscription: data?.usersubscription?.plan_type,
          }));

          console.log(structured_data);

          const filteredData =
            selectedSubscription === "all"
              ? structured_data
              : structured_data.filter(
                (item: any) => item.subscription === selectedSubscription
              );

          // Filter data based on search query
          const searchData =
            searchQuery.trim() === ""
              ? filteredData
              : filteredData.filter(
                (item: any) =>
                  item.username
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                  item.email.toLowerCase().includes(searchQuery.toLowerCase())
              );

          return {
            ...data?.data,
            results: searchData,
          };
        })
        .catch((error) => console.log("Failed to get users", error));
    },
  });
  // console.log("🚀 ~ SubscribedUsers ~ data:", data);

  const handleToggleAccess = async () => {
    console.log("function run");
    try {
      const response = await apiClient.post("/toggle_global_mode/");
      const mode = response.data.mode;
      console.log(mode);
      setToggleAccess(mode);
      console.log("value set", toggleAccess);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-2 md:px-10 py-10 antd-table antd-selector-for-admin">
      <div className="pagination-line-black flex flex-col border border-gray-600 rounded-2xl min-w-[350px] overflow-x-auto">
        <header className="p-5 flex flex-col md:flex-row gap-3 justify-between items-center">
          <div className="flex flex-col w-full md:w-1/3 text-white">
            <h1 className="text-2xl font-bold">
              Users {`(${data?.results?.length})`}
            </h1>
            <span>Manage your users here</span>
          </div>

          <div className="w-full md:w-1/3 flex gap-2">
            <span className="text-xl text-white">Users access</span>
            <label className="inline-flex items-center justify-center cursor-pointer ">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={toggleAccess}
                onChange={handleToggleAccess}
              />
              <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex flex-col md:flex-row w-full md:w-1/2  gap-4 ">
            <Select
              defaultValue={"Apply Filters"}
              className="h-full"
              onChange={handleChange}
              options={tableFilter}
              suffixIcon={<Image src={FilterIcon} alt="filtered icon" />}
            />
            <Input
              size="large"
              placeholder="search..."
              prefix={<SearchOutlined className="mr-2" />}
              onChange={(e) => handleSearch(e.target.value)}
              className="bg-transparent"
            />
          </div>
        </header>
        <Table
          dataSource={data?.results}
          columns={columns}
          loading={isLoading}
          className="rounded-lg border-t border-[#7a7a7a]"
          pagination={{
            pageSize: 10,
            total: data?.count,
            onChange: (page) => {
              setPageNumber(page);
              onPageChange(page);
            },
          }}
        />
      </div>
    </div>
  );
}
