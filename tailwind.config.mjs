/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html'
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
  important: true,
  corePlugins: {
    preflight: true,
  },
  safelist: [
    'bg-purple-700', 
    'text-purple-800',
    // Add other classes you want to always include
  ]
}