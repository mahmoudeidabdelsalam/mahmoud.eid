/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: true,
  },
  output: 'standalone', // مهم جداً
};

module.exports = nextConfig;