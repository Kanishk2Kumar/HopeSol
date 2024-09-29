/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'picsum.photos',
      'source.unsplash.com',
      'dummyimage.com',
      'images.pexels.com', // Add this line

    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.google.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        pathname: '/**',
      }, {
        hostname: 'utfs.io'
      },
    ],
  },
};

export default nextConfig;
