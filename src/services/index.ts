import { apiClient } from "@/utils/apiClient";
import { useQuery } from "react-query";

export function usePaymentPlansQuery() {
    return useQuery({
        queryKey: ["get-all-package"],
        queryFn: async () => {
            try {
                const { data } = await apiClient.get("/payment-plans/");
                return data;
            } catch (error) {
                throw new Error(error as string);
            }
        },
    });
}
