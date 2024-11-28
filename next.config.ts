import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors *", // Allow embedding on any domain
          },
          {
            key: "X-Frame-Options",
            value: "ALLOWALL", // Allow embedding everywhere
          },
        ],
      },
    ];
  },
};

export default nextConfig;
