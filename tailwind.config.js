/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: '#ff304f',
        teal: '#00798c',
        navy: '#173f5f',
        peach: '#fae8d8',
        'peach-light': '#fdf4ee',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};