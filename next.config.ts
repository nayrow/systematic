import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "strapi.systematicrobotics.ro",
                port: "",
                pathname: "/uploads/**",
            },
        ],
    },
};

export default nextConfig;
