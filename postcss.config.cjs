const isProduction = process.env.NODE_ENV === 'production';
const postcssNesting = require('postcss-nesting');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    postcssNesting(),
    autoprefixer(),
    ...(isProduction
      ? [
          cssnano({
            preset: [
              'default',
              {
                discardComments: {
                  removeAll: true,
                },
              },
            ],
          }),
        ]
      : []),
  ],
};
