import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    // baseURL: "http://54.237.156.251:8000/api",
});

export { apiClient };
