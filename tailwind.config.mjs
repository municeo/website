/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eef7ff',
          100: '#d9eeff',
          200: '#bce0ff',
          300: '#8ecbff',
          400: '#59abff',
          500: '#3b86fc',
          600: '#2462f1',
          700: '#1c4edd',
          800: '#1d3fb3',
          900: '#1e3a8c',
          950: '#172554',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
