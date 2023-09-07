import { defineConfig } from 'astro/config';
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
    sitemap(),
    tailwind(),
    sanity({
      projectId: 'kx8fng11',
      dataset: 'staging',
      // apiVersion: import.meta.env.NEXT_PUBLIC_SANITY_API_VERSION,
      useCdn: false,
    }),
    react(),
  ],
});
