/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Disable ESLint during production builds
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['images.ctfassets.net'],
    },
};

export default nextConfig;
