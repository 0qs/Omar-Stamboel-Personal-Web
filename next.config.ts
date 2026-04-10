import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow all external hostnames via unoptimized in the component,
    // but also add a broad remotePattern for convenience
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
