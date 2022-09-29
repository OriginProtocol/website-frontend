/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  ...nextConfig,
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost"],
  },
};