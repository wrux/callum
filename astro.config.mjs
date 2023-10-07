import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import { dataset, projectId } from './src/sanity/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://callum.co.uk',
  adapter: vercel(),
  output: 'hybrid',
  image: {
    domains: ['cdn.sanity.io'],
  },
  integrations: [
    react(),
    sanity({
      projectId,
      dataset,
      useCdn: false,
      studioBasePath: '/studio',
    }),
    sitemap(),
    tailwind(),
  ],
});
