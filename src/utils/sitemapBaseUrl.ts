import axios from "axios";

const SiteMapBaseUrl = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SITEMAP_API_BASE_URL,
});

export { SiteMapBaseUrl };