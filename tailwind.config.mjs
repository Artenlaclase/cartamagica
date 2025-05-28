/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./node_modules/astro/**/*.js" // Important for Vercel
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
  safelist: [
    { pattern: /(bg|text|border)-purple-(50|700|800)/ },
    'max-w-6xl',
    'py-16',
    'px-4',
    'md:grid-cols-3',
    'grid',
    'gap-8',
    'mt-12'
  ]
}