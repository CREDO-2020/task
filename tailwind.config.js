/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#071a33',
        brand: '#1769e0',
        skyblue: '#eaf3ff',
      },
      boxShadow: {
        soft: '0 18px 55px rgba(7, 26, 51, 0.09)',
      },
    },
  },
  plugins: [],
}