import { useMutation } from "react-query";
import { apiClient } from "@/utils/apiClient";
// export const generateImage = useMutation({
//     mutationKey: "generate-image",
//     mutationFn: async (data) => {
//         const response = await apiClient.post(`/generate-image/`, data);
//         return response.data;
//     },
// });

// export const refiningPrompt = useMutation({
//     mutationKey: "/refine-prompt/",
//     mutationFn: async (data) => {
//         const response = await apiClient.post(`/refine-prompt/`, data);
//         return response.data;
//     },
// });

// export const decrementer = useMutation({
//     mutationKey: "generate-image-countdown",
//     mutationFn: async (data) => {
//         const response = await apiClient.post(`/decrement_limit/`, data);
//         return response.data;
//     },
// });
