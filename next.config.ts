/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // مهم جدا لتوليد worker
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  // experimental: { turbo: true }, <-- شيل ده
};

module.exports = nextConfig;