import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://vplsh7.github.io', // custom domain
  integrations: [tailwind()],
});
