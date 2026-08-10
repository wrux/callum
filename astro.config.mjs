import { setDefaultAutoSelectFamily } from 'node:net';
import { defineConfig } from 'astro/config';

// Node's happy-eyeballs IPv6/IPv4 race (autoSelectFamily, on by default since
// Node 20) intermittently kills connections to Sanity with ECONNRESET on this
// network, failing builds or stalling them for 20s+ in retry backoff.
setDefaultAutoSelectFamily(false);
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
    inlineStylesheets: 'always',
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
