import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "strapi.systematicrobotics.ro",
                port: "80",
                pathname: "/uploads/**",
            },
        ],
    },
};

export default nextConfig;
