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
        black: 'rgb(4, 13, 18)',
        // Brand colour pallete: https://colorhunt.co/palette/070a52d21312ed2b2af15a59
        brand: {
          black: 'rgb(7, 10, 82)',
          dark: 'rgb(210, 19, 18)',
          medium: 'rgb(237, 43, 42)',
          light: 'rgb(241, 90, 89)',
        },
        wrux: 'rgb(0, 234, 207)',
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
