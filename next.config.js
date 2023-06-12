/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: [
      'https://edgeapi.ivyarc.com',
      'https://edgeapidev.ivyarc.com',
      'https://res.cloudinary.com',
    ],
  },
  trailingSlash: true,
}

module.exports = nextConfig
