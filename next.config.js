/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    adjustFontFallbacks: true,
  },
}

module.exports = nextConfig
