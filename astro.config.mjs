import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

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
      projectId: 'kx8fng11',
      dataset: 'staging',
      useCdn: false,
      studioBasePath: '/studio',
    }),
    sitemap(),
    tailwind(),
  ],
});
