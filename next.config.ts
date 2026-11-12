
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/lualajak",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
