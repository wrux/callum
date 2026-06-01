import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';
import { dataset, projectId } from './src/sanity/config';

const studioIntegrations = [
  (await import('@sanity/astro')).default({
    projectId,
    dataset,
    useCdn: false,
    studioBasePath: '/studio',
  }),
  (await import('@astrojs/react')).default(),
];

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
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  integrations: [
    ...studioIntegrations,
    sitemap(),
    icon({
      include: {
        'mdi:*': true,
      },
    }),
  ],
});
