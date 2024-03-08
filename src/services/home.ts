import { apiClient } from "@/utils/apiClient";
import { useInfiniteQuery, useQuery } from "react-query";

// export const getImagesData = async (category, filters, sortBy) => {
//     try {
//         let url = category
//             ? `/categories/${category}/images`
//             : `/categories/all/images/`;
//         const response = await apiClient.get(url, {
//             params: { ...filters, sort_by: sortBy },
//         });
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching images:", error);
//         throw error;
//     }
// };

export const useCategoriesQuery = async () => {
    try {
        const response = await apiClient.get(`/categories/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
};
