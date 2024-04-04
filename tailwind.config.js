/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // primaryColor: '#067fd0',
        primaryColor: '#5356FF',
      },
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
        overpass: ['Overpass', 'sans-serif'],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [],
};
