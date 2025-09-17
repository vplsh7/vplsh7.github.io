import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://vplsh7.github.io', // custom domain
  integrations: [
    tailwind(),
    mdx() // 👈 Enable MDX support
  ],
});


