import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import icon from 'astro-icon';
import { dataset, projectId } from './src/sanity/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://callum.co.uk',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
  prefetch: {
    defaultStrategy: 'hover',
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
    sanity({
      projectId,
      dataset,
      useCdn: false,
      studioBasePath: '/studio',
    }),
    react(),
    sitemap(),
    icon({
      include: {
        'mdi:*': true,
      },
    }),
  ],
});
