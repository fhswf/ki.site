import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()]
});