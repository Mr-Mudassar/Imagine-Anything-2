/** @type {import('next').NextConfig} */
const nextConfig = {
 
   
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "imagineanything.s3.amazonaws.com",
            },
            {
                protocol: "https",
                hostname: "imagineanything.ai",
            },
            {
                protocol: "http",
                hostname: "54.237.156.251",
            },
        ],
    },
};

export default nextConfig;
