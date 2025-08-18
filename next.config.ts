/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: disables ESLint during `next build`
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iili.io', // or whatever the direct image host is
        pathname: '/**',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;

