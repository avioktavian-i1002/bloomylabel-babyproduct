/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './sewa.html', './laundry.html', './admin.html', './catalog.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        '2xs': '0 1px rgb(0 0 0 / 0.05)',
      },
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        cream: '#FAF7F4',
        peach: {
          50: '#FFF5F1',
          100: '#FFE8DF',
          200: '#FFD0BE',
          500: '#E8734A',
          600: '#D35B31',
        },
        sage: {
          50: '#F2F7F4',
          100: '#E1ECE5',
          500: '#4F7A65',
          600: '#3C614F',
          700: '#2D4A3C',
        },
        ink: '#232629',
      },
    },
  },
};
