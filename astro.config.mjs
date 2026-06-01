import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://callum.co.uk',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  output: 'static',
  prefetch: {
    defaultStrategy: 'hover',
  },
  build: {
    concurrency: 2,
  },
  vite: {
    build: {
      target: 'es2022',
      cssTarget: 'chrome120',
    },
  },
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  integrations: [
    sitemap(),
    icon({
      include: {
        'mdi:*': true,
      },
    }),
  ],
});
