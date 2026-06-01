const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    ...(isProduction
      ? {
          cssnano: {
            preset: [
              'default',
              {
                discardComments: {
                  removeAll: true,
                },
              },
            ],
          },
        }
      : {}),
  },
};
