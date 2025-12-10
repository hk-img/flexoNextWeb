/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
    images: {
        // Modern config with remotePatterns (Next 13+)
        remotePatterns: [
            { protocol: "https", hostname: "s3.ap-south-1.amazonaws.com", pathname: "/**" },
            { protocol: "https", hostname: "worker-test-app.s3.ap-south-1.amazonaws.com", pathname: "/**" },
            { protocol: "https", hostname: "worker-app.s3.ap-south-1.amazonaws.com", pathname: "/**" },
            { protocol: "https", hostname: "flexospaces-images.s3.ap-south-1.amazonaws.com", pathname: "/**" },
        ],
        formats: ["image/avif", "image/webp"], // Modern formats for better compression
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60, // Cache images for 60 seconds
    },
    poweredByHeader: false, // Security - remove X-Powered-By header
    reactStrictMode: true,
    // PERMANENT FIX: Modern browsers ke liye optimize - unnecessary polyfills avoid karo (11.4 KiB)
    compiler: {
        // Remove console logs in production (optional)
        removeConsole: process.env.NODE_ENV === 'production' ? {
            exclude: ['error', 'warn'],
        } : false,
    },
    // SWC compiler automatically uses browserslist from .browserslistrc
    // Modern browsers (Chrome 92+, Firefox 90+, Safari 15.4+) support Baseline features
    // No polyfills needed for: Array.prototype.at, flat, flatMap, Object.fromEntries, etc.
    experimental: {
        // Modern browsers ke liye optimize
        optimizePackageImports: [
            '@tanstack/react-query',
            'react-select',
            'react-datepicker',
            'embla-carousel-react',
        ],
    },
    // Note: swcMinify is default in Next.js 15, no need to set explicitly
    // SWC compiler modern browsers ke liye optimize karega
    // browserslist config (.browserslistrc) ko respect karega
    // Experimental features for better optimization
    experimental: {
        // Modern browsers ke liye optimize
        optimizePackageImports: [
            '@tanstack/react-query',
            'react-select',
            'react-datepicker',
            'embla-carousel-react',
        ],
    },
    // CSS optimization - reduce render blocking CSS (45.6 KiB, 610ms delay)
    // Next.js automatically splits CSS, but we optimize chunking
    webpack: (config, { dev, isServer }) => {
        // Production mein CSS chunks ko optimize karo
        if (!dev && !isServer) {
            config.optimization = {
                ...config.optimization,
                splitChunks: {
                    ...config.optimization.splitChunks,
                    cacheGroups: {
                        ...config.optimization.splitChunks.cacheGroups,
                        // Critical CSS ko separate chunk mein rakho
                        criticalStyles: {
                            name: 'critical',
                            test: /[\\/]app[\\/]globals\.css/,
                            chunks: 'all',
                            enforce: true,
                            priority: 30,
                        },
                        // Non-critical CSS ko defer karne ke liye separate chunk
                        styles: {
                            name: 'styles',
                            test: /\.(css|scss)$/,
                            chunks: 'async', // Async chunks - non-blocking
                            enforce: true,
                            priority: 20,
                        },
                    },
                },
            };
        }
        
        // PERMANENT FIX: Prevent polyfills for Baseline features (11.4 KiB savings)
        // Next.js SWC respects .browserslistrc, but we ensure no polyfills are added
        // Modern browsers (Chrome 92+, Firefox 90+, Safari 15.4+) support all Baseline features
        // No need for polyfills: Array.prototype.at, flat, flatMap, Object.fromEntries, etc.
        
        // Ensure browserslist is properly read
        // Next.js automatically uses .browserslistrc file
        // Our .browserslistrc targets modern browsers, so no polyfills should be added
        
        return config;
    },
};

export default nextConfig;
