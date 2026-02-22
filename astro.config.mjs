// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://yongai.ca',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['gsap']
    }
  }
});
