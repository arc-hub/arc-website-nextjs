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
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/blog': { page: '/blog' },
      '/courses': { page: '/courses' },
      '/about_us': { page: '/about_us' },
      '/services': { page: '/services' },
      '/interviews': { page: '/interviews' },
      '/contact_us': { page: '/contact_us' },
    }
  },
}

module.exports = nextConfig
