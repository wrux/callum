const isProduction = process.env.NODE_ENV === 'production';
const tailwindcss = require('@tailwindcss/postcss');
const cssnano = require('cssnano');

const dropSupportsFallbacks = {
  postcssPlugin: 'drop-supports-fallbacks',
  AtRule: {
    supports(rule) {
      rule.remove();
    },
  },
};

const dropTailwindPropertyRegistrations = {
  postcssPlugin: 'drop-tailwind-property-registrations',
  AtRule: {
    property(rule) {
      if (rule.params.startsWith('--tw-')) {
        rule.remove();
      }
    },
  },
};

module.exports = {
  plugins: [
    tailwindcss(),
    ...(isProduction
      ? [
          // Drop generated fallback wrappers because the site targets evergreen browsers.
          dropSupportsFallbacks,
          // Keep explicit defaults in CSS and remove Tailwind's typed property registrations.
          dropTailwindPropertyRegistrations,
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
