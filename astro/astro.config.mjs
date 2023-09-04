import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://callum.co.uk',
  image: {
    domains: ['cdn.sanity.io'],
  },
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    sanity({
      // projectId: import.meta.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      // dataset: import.meta.env.NEXT_PUBLIC_SANITY_DATASET,
      // apiVersion: import.meta.env.NEXT_PUBLIC_SANITY_API_VERSION,
      projectId: 'kx8fng11',
      dataset: 'staging',
      // apiVersion: import.meta.env.NEXT_PUBLIC_SANITY_API_VERSION,
      useCdn: false,
    }),
    react(),
  ],
});
