/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iili.io',
        port: '',
        pathname: '/**', // allow all paths under this domain
      },
    ],
  },
};

module.exports = nextConfig;

