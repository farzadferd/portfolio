/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: disables ESLint during `next build`
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [],
  },
};

module.exports = nextConfig;

