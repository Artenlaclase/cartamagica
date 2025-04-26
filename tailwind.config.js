/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#f9f3ff',
          700: '#6a0dad',
          800: '#4b0082',
        }
      }
    },
  },
  plugins: [],
}