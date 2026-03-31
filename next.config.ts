import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Memory optimization for the dev server
  experimental: {
    // Limits the amount of memory webpack uses
    webpackBuildWorker: true,
    // Reduce memory footprint of the dev server
    scrollRestoration: true,
  },
  // Ensure images are processed efficiently
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Disable source maps in production to save memory during build
  productionBrowserSourceMaps: false,
};

export default nextConfig;
