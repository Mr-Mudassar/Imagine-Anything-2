"use client";
import CategoriesTabs from "@/components/CategoriesTabs";
import SearchingAndSorting from "@/components/SearchingAndSorting";

type HomePageLayoutType = Readonly<{
    setSearchQuery: (val: string) => void;
    setSearchedData: () => void;
    setSortBy: (val: string) => void;
}>;

const HomePageLayout = ({
    setSearchQuery,
    setSearchedData,
    setSortBy,
}: HomePageLayoutType) => {
    return (
        <div>
            <SearchingAndSorting
                setSearchQuery={setSearchQuery}
                setSearchedData={setSearchedData}
                setSortBy={setSortBy}
            />
            <CategoriesTabs />
        </div>
    );
};
export default HomePageLayout;
