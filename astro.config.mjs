import { defineConfig, envField } from 'astro/config';
import preact from '@astrojs/preact';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      BUILD_TIME: envField.number({ context: "client", access: "public", default: Date.now() }),
    }
  },
  integrations: [tailwind(), preact()]
});