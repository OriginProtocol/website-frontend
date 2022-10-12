const locales = require('./locales');

const { NEXT_LEGACY_WEBSITE_HOST, NEXT_PUBLIC_STRAPI_API_URL, NEXT_PUBLIC_DISCORD_URL, NEXT_PUBLIC_TELEGRAM_URL } = process.env

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true
  }
}

// API endpoints that should forwarded to the legacy site
const legacyAPIPaths = [
  '/total-ogn',
  '/total-ogv',
  '/total-ousd',
  '/circulating-ogn',
  '/circulating-ogv',
  '/social-stats',
  '/mailing-list/:action*',
]

// Other pages that should be forwarded to the legacy site
const legacyPagePaths = [
  // TODO: Do we still use them?
  '/apple-app-site-association',
  '/mobile/apk',
  '/whitepaper.pdf',
  '/ios',
  '/android',
  '/lupefiasco',
  '/dapp',
  '/rewards',
]

// Map legacy routes to new ones here
const legacyPageMappings = [
  // [source, destination]
  ['/dashboard', '/'],
  ['/presale', '/'],
  ['/tokens', '/'],
  ['/investors', '/'],
  
  ['/product', '/'],
  ['/ogn-token', '/'],
  
  ['/team', '/community'],
  ['/about', '/community'],

  ['/discord', `${NEXT_PUBLIC_DISCORD_URL}`],
  ['/telegram', `${NEXT_PUBLIC_TELEGRAM_URL}`],

  // TODO: Do we still use them?
  ['/admin', 'https://admin.staging.originprotocol.com'],
]

// TODO: Check these missing endpoints from legacy site with someone
// - /whitepaper
// - /developers
// - /privacy/extension
// - /nft-terms
// - /aup
// - /creator
// - /litepaper
// - /browser-extension
// - /huobi-launch
// - /reward/*
// - /reward/*

const legacyAPIRedirects = legacyAPIPaths.map(path => ({
  source: path,
  destination: `${NEXT_LEGACY_WEBSITE_HOST}${path}`,
  // For some weird reason, locale is enabled on API endpoints
  // on the legacy python stack
  // locale: false, 
  permanent: true
}))

const legacyPageRedirects = legacyPagePaths.map(path => ({
  source: path,
  destination: `${NEXT_LEGACY_WEBSITE_HOST}${path}`, 
  permanent: true
}))

const legacyPageRewrites = legacyPageMappings.map(([source, destination]) => ({
  source,
  destination
}))

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
      ...legacyAPIRedirects,
      ...legacyPageRedirects,
    ]
  },
  async rewrites() {
    return [
      {
        // TODO: Cache response
        source: '/sitemap.xml',
        destination: `${NEXT_PUBLIC_STRAPI_API_URL}/api/website/sitemap`,
        locale: false
      },
      ...legacyPageRewrites
    ]
  },
};
