/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["s3.ap-south-1.amazonaws.com","worker-test-app.s3.ap-south-1.amazonaws.com"],
    }
};

export default nextConfig;
