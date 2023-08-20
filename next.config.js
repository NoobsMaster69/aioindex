/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    domains: ["tailwindui.com"],
  },
};

module.exports = nextConfig;
