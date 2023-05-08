/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.nps.gov', 'www.jetsetter.com'],
  },
}

module.exports = nextConfig