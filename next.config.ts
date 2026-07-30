import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  experimental: {
    globalNotFound: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
