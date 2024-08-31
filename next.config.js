/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "carhive.eduam.dev",
      },
      {
        protocol: "https",
        hostname: "carhive.vercel.app",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
}

module.exports = nextConfig
