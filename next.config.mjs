/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
    images: {
        domains: ["s3.ap-south-1.amazonaws.com","worker-test-app.s3.ap-south-1.amazonaws.com","worker-app.s3.ap-south-1.amazonaws.com","flexospaces-images.s3.ap-south-1.amazonaws.com"],
        formats: ['image/avif', 'image/webp'], // Modern formats for better compression
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60, // Cache images for 60 seconds
    },
    // Production optimizations
    swcMinify: true,
    poweredByHeader: false, // Security - remove X-Powered-By header
    reactStrictMode: true,
};

export default nextConfig;
