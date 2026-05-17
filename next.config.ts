import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Ensure images are processed efficiently
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true,
  },
  // Disable source maps in production to save memory during build
  productionBrowserSourceMaps: false,
};

export default nextConfig;
