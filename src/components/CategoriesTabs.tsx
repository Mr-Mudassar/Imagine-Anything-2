"use client";
import { useStore } from "@/store";
import { apiClient } from "@/utils/apiClient";
import Link from "next/link";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { useQuery } from "react-query";

const CategoriesTabs = () => {
    const pathname = usePathname();
    const categoriesData = useStore((state) => state.categories);
    const setCategories = useStore((state) => state.setCategories);
    useQuery({
        queryKey: ["get-all-category"],
        queryFn: async () => {
            return apiClient
                .get(`/categories/`)
                .then(({ data }) => setCategories(data))
                .catch((err) => toast.error(err.message));
        },
    });
    const categories = Array.isArray(categoriesData)
        ? categoriesData
        : [categoriesData];

    return (
        <section className="flex items-center gap-x-1 md:gap-x-4 overflow-auto pb-4">
            {categories && (
                <>
                    <Link
                        href="/"
                        className={`backdrop-blur-xl px-4 md:px-8 py-1 sm:py-2 whitespace-nowrap rounded-xl text-white border border-white hover:bg-white hover:text-black text-xl tracking-wider font-medium cursor-pointer ${
                            pathname === "/"
                                ? "bg-white !text-black"
                                : "bg-white/10"
                        }`}
                    >
                        All
                    </Link>

                    {categories.map((category) => {
                        return (
                            <Link
                                key={category?.categories_id}
                                className={`backdrop-blur-xl capitalize px-4 md:px-8 py-1 sm:py-2 whitespace-nowrap rounded-xl text-white border border-white text-xl tracking-wider font-medium cursor-pointer ${
                                    pathname ===
                                    `/category/${category?.categories_name?.replace(
                                        /\s+/g,
                                        "-"
                                    )}`
                                        ? "bg-white !text-black"
                                        : "bg-white/10"
                                }`}
                                href={`/category/${category?.categories_name.replace(
                                    /\s+/g,
                                    "-"
                                )}`}
                            >
                                {category?.categories_name}
                            </Link>
                        );
                    })}
                </>
            )}
        </section>
    );
};

export default CategoriesTabs;
