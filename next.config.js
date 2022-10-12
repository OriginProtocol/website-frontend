const locales = require('./locales');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true
  }
}

module.exports = {
  ...nextConfig,
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost", "cmsmediaproduction.s3.amazonaws.com", "avatars.githubusercontent.com"],
  },
  i18n: {
    locales,
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      {
        source: '/team',
        destination: '/community',
        permanent: true,
      },
      {
        source: '/dashboard',
        destination: '/',
        permanent: true,
      },
      {
        source: '/total-ogn',
        destination: '/api/total-ogn',
        permanent: true,
      },
      {
        source: '/total-ogv',
        destination: '/api/total-ogv',
        permanent: true,
      },
      {
        source: '/circulating-ogn',
        destination: '/api/circulating-ogn',
        permanent: true,
      },
      {
        source: '/circulating-ogv',
        destination: '/api/circulating-ogv',
        permanent: true,
      },
      {
        source: '/social-stats',
        destination: '/api/social-stats',
        permanent: true,
      },
      {
        source: '/mailing-list/join',
        destination: '/api/mailing-list/join',
        permanent: true,
      },
      {
        source: '/mailing-list/unsubscribe',
        destination: '/api/mailing-list/unsubscribe',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        // TODO: Cache response
        source: '/sitemap.xml',
        destination: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/website/sitemap`
      }
    ]
  },
};
