/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
    ];
  },
  experimental: {
    esmExternals: true, // helps with MDX and Contentlayer packages
  },
};

module.exports = nextConfig;
