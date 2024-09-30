import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import svelte from '@astrojs/svelte';

import db from '@astrojs/db';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), db()],
  output: 'static',
  security: {
    checkOrigin: true
  },
  env: {
    schema: {
      TENANT_ID: envField.string({ context: "server", access: "secret"}),
      CLIENT_ID: envField.string({ context: "server", access: "secret" }),
      CLIENT_SECRET: envField.string({ context: "server", access: "secret" }),
    }
  },
  adapter: vercel()
});