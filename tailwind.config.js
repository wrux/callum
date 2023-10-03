import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        brand: {
          black: 'rgb(4, 13, 18)',
          dark: 'rgb(24, 61, 61)',
          medium: 'rgb(92, 131, 116)',
          light: 'rgb(147, 177, 166)',
        },
        wrux: '#00eacf',
      },
      fontFamily: {
        sans: ['InterVariable', 'Inter', ...fontFamily.sans],
      },
      gridTemplateColumns: {
        '1/3': '1fr 2fr',
        dynamic: 'repeat(var(--column-count), 1fr)',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      minHeight: {
        most: '75vh',
      },
    },
  },
  plugins: [],
};
