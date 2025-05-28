import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    dirs: ["src/pages", "src/components"],
  },
};

export default nextConfig;
