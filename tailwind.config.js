/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#ef233c',
        secondary: '#25103f',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      gridTemplateColumns: {
        '1/3': '1fr 2fr',
      },
    },
  },
  plugins: [],
};
