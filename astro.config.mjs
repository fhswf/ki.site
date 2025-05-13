import { defineConfig, envField } from 'astro/config';
import preact from '@astrojs/preact';


import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      BUILD_TIME: envField.number({ context: "client", access: "public", default: Date.now() }),
    }
  },

  integrations: [preact()],

  vite: {
    plugins: [tailwindcss()]
  }
});