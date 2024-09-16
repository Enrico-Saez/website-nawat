import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import svelte from '@astrojs/svelte';

import db from '@astrojs/db';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), db()],
  output: 'hybrid',
  security: {
    checkOrigin: true
  },
  adapter: vercel()
});