import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // Required for static export to GitHub Pages
  images: {
    unoptimized: true, // Required for Next.js Image component on GitHub Pages
  },
};

export default nextConfig;
