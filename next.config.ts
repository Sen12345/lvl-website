import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "utfs.io", port: "" }],
  },
  /* config options here */
  outputFileTracingRoot: __dirname,
  reactStrictMode: true,
  // optimizeFonts: true,
};

export default nextConfig;
