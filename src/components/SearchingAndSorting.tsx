import SortIcon from "@/assets/svgs/sort.svg";
import { ImageType, useStore } from "@/store";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { useQueryClient } from "react-query";

type SearchingAndSortingType = Readonly<{
    setSearchedData: (val: ImageType[] | null) => void;
    setSearchQuery: (val: string) => void;
    setSortBy: (val: string) => void;
}>;

export default function SearchingAndSorting({
    setSearchedData,
    setSearchQuery,
    setSortBy,
}: SearchingAndSortingType) {
    const Sorting = [
        {
            value: "newest",
            label: "Newest",
        },
        {
            value: "popularity",
            label: "Popularity",
        },
        {
            value: "likes",
            label: "Likes",
        },
    ];
    const queryClient = useQueryClient();
    const setAllImages = useStore((state) => state.setAllImages);
    const setSelectedSortOption = useStore((state) => state.setSelectedSortOption);
    const selectedSortOption = useStore((state) => state.selectedSortOption);

    // const [selectedSortOption, setSelectedSortOption] = useState<string>("");

    const handleSearch = (value: string) => {
        setSearchQuery(value);
        if (value === "") {
            setAllImages([]);
            queryClient.invalidateQueries("get-image-details");
            queryClient.invalidateQueries("get-all-category");
            queryClient.invalidateQueries("get-all-images");
            setSearchedData(null);
        }
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const searchValue = formData.get("search")?.toString();
        handleSearch(searchValue || "");
    };

    const handleSortChange = (value: string) => {
        setSortBy(value);
        setSelectedSortOption(value);
    };

    return (
        <section
            className="grid grid-cols-1 sm:grid-cols-[1fr_164px] md:gap-x-4 gap-y-8 pb-8
         "
        >
            <form onSubmit={handleSubmit} className="h-[40px]">
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        name="search"
                        className="block w-full p-4 ps-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
                        placeholder="Search any image by tags"
                        required
                    />
                    <button
                        type="submit"
                        className="text-white absolute end-2.5 bottom-2.5 bg-gradient-to-r from-orange-500 to-pink-500  font-medium rounded-lg px-4 py-2 text-lg "
                    >
                        Search
                    </button>
                </div>
            </form>

            <div className="relative rounded-lg">
                <select
                    value={selectedSortOption}
                    onChange={(e) => handleSortChange(e.target.value)}
                    className="text-lg block appearance-none w-full bg-yellow h-[60px] border border-gray-300 text-gray-900 py-3 px-4 rounded-lg focus:outline-none focus:border-gray-500"
                >
                    <option
                        value=""
                        disabled
                        className="bg-white hover:bg-gray-100 hover:bg-transparent text-lg"
                    >
                        Sort By
                    </option>
                    {Sorting.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                            className="bg-white hover:bg-gray-100 hover:bg-transparent h-[14px] text-lg"
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none ml-[-16px] ">
                    <Image src={SortIcon} alt="sort icon" />
                </div>
            </div>
        </section>
    );
}
