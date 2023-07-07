import { defineConfig } from 'astro/config';
import image from "@astrojs/image";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.dvartho.com',
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), mdx()]
});