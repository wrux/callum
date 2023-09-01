import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      // padding: {
      //   DEFAULT: '1rem',
      //   sm: '2rem',
      //   lg: '4rem',
      // },
      // mx-auto px-5 lg:px-0
    },
    extend: {
      animation: {
        wave: 'wave 2.5s linear infinite',
      },
      colors: {
        brand: '#ef233c',
        secondary: '#25103f',
        wrux: '#00eacf',
      },
      fontFamily: {
        sans: ['InterVariable', 'Inter', ...fontFamily.sans],
        // sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      fontSize: {
        // Fluid type: @link https://utopia.fyi/type/calculator?c=320,21,1.2,1140,24,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l
        'step--2': 'clamp(0.91rem, calc(0.89rem + 0.1vw), 0.96rem)',
        'step--1': 'clamp(1.09rem, calc(1.05rem + 0.21vw), 1.2rem)',
        'step-0': 'clamp(1.31rem, calc(1.24rem + 0.37vw), 1.5rem)',
        'step-1': 'clamp(1.58rem, calc(1.46rem + 0.59vw), 1.88rem)',
        'step-2': 'clamp(1.89rem, calc(1.71rem + 0.89vw), 2.34rem)',
        'step-3': 'clamp(2.27rem, calc(2.01rem + 1.29vw), 2.93rem)',
        'step-4': 'clamp(2.72rem, calc(2.36rem + 1.83vw), 3.66rem)',
        'step-5': 'clamp(3.27rem, calc(2.75rem + 2.56vw), 4.58rem)',
      },
      gridTemplateColumns: {
        '1/3': '1fr 2fr',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          to: { transform: 'rotate(0.0deg)' },
        },
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      minHeight: {
        most: '75vh',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
