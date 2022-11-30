/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'https://callum.co.uk',
  generateRobotsTxt: true,
  sitemapSize: 1000,
};

module.exports = config;
