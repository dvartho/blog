import { defineConfig, sharpImageService } from 'astro/config';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.dvartho.com',
  integrations: [mdx()],
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
});