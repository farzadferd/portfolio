/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'freeimage.host',
        port: '',
        pathname: '/i/**', // allow all paths under this domain
      },
    ],
  },
};

module.exports = nextConfig;

