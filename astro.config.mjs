import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import icon from 'astro-icon';
import { dataset, projectId } from './src/sanity/config';

const shouldEmbedStudio =
  process.env.ENABLE_SANITY_STUDIO === 'true' || !process.env.VERCEL;

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
    ...(shouldEmbedStudio
      ? [
          sanity({
            projectId,
            dataset,
            useCdn: false,
            studioBasePath: '/studio',
          }),
        ]
      : []),
    ...(shouldEmbedStudio ? [react()] : []),
    sitemap(),
    icon({
      include: {
        'mdi:*': true,
      },
    }),
  ],
});
