import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/imsge/**",
      },
      {
        pathname: "/imsge/**",
        search: "?v=hero-crop-20260816",
      },
    ],
  },
};

export default nextConfig;
