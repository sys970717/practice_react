/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { webpack }) {
    config.resolve = {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      ...config.resolve,
    };
    return config;
  },
};

module.exports = nextConfig
