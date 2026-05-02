/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
  pink: '#D79B98',
  'pink-light': '#F0C8C8',
  teal: '#50A08C',
  'teal-light': '#3CB48C',
  navy: '#0F1932',
  peach: '#F5E6D7',
  'peach-light': '#F0E6CD',
  gray: '#999999',
  'gray-light': '#efefef',
  blue: '#20639B',
  'blue-light': '#497fad',
},
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
