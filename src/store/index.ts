"use client";

import { AuthPayload, CategoryType } from "@/types";
import { StoreApi, create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type ImageType = {
    image_id: number;
    categories: {
        categories_id: number;
        categories_name: string;
    };
    likes: any[];
    shares_count: number;
    comments: any[];
    caption: string[];
    likes_count: number;
    comments_count: number;
    user_id: number;
    username: string;
    email: string;
    image_path: string;
    prompt_optimized: string;
    timestamp: string;
};

type StoreState = {
    selectedSortOption: string;
    navOpen: boolean;
    isLogin: boolean;
    openLoginModal: boolean;
    allImages: ImageType[];
    clientFetchAllData: boolean;
    planType: string;
    isRemix: boolean;
    imageGenerateLimit: number;
    imageDownloadLimit: number;
    userData?: AuthPayload;
    categories: CategoryType[];
    setSelectedSortOption: (value: string) => void;
    setIsLogin: (value: boolean) => void;
    setOpenLoginModal: (value: boolean) => void;
    setAllImages: (value: ImageType[]) => void;
    setClientFetchAllData: (data: boolean) => void;
    setPlanType: (value: string) => void;
    setIsRemix: (value: boolean) => void;
    setImageGenerateLimit: (value: number) => void;
    setImageDownloadLimit: (value: number) => void;
    setUserData: (value: any) => void;
    setCategories: (value: CategoryType[]) => void;
    setNavOpen: (value: boolean) => void;
};

export type ManageStates = {
    isRemix: boolean;
    setIsRemix: (newValue: boolean) => void;

    planType: string;
    setPlanType: (newValue: string) => void;

    imageGenerateLimit: number;
    setImageGenerateLimit: (newValue: number) => void;

    imageDownloadLimit: number;
    setImageDownloadLimit: (newValue: number) => void;
};

export const useStore = create<StoreState>()(
    persist(
        (set) => ({
            selectedSortOption: "",
            isLogin: false,
            openLoginModal: false,
            allImages: [],
            clientFetchAllData: false,
            planType: "",
            isRemix: false,
            imageGenerateLimit: 0,
            imageDownloadLimit: 0,
            userData: undefined,
            categories: [],
            navOpen: false,
 
            setSelectedSortOption: (value : string) => set({selectedSortOption: value}),
            setNavOpen: (value: boolean) => set({ navOpen: value }),
            setIsLogin: (value: boolean) => set({ isLogin: value }),
            setIsRemix: (newValue: boolean) => set({ isRemix: newValue }),
            setOpenLoginModal: (newValue: boolean) =>
                set({ openLoginModal: newValue }),
            setAllImages: (newImages: ImageType[]) =>
                set({ allImages: newImages }),
            setClientFetchAllData: (data: boolean) =>
                set({ clientFetchAllData: data }),
            setPlanType: (value: string) => set({ planType: value }),
            setImageGenerateLimit: (value: number) =>
                set({ imageGenerateLimit: value }),
            setImageDownloadLimit: (value: number) =>
                set({ imageDownloadLimit: value }),
            setUserData: (data: any) => set({ userData: data }),
            setCategories: (value: CategoryType[]) =>
                set({ categories: value }),
        }),
        {
            name: "saved-states",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);
