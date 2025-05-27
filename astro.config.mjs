// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/cartamagica/', // Cambia esto por el nombre de tu repositorio
  trailingSlash: 'ignore',
  integrations: [],
  vite: {
    css: {
         postcss: {
           plugins: [require('tailwindcss'), require('autoprefixer')],},
    },
  },
});