/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '0.5rem',
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            backgroundColor: theme('colors.neutral.100'),
            h2: {
              marginTop: '0rem',
              color: theme('colors.amber.500'),
            },
            h3: {
              color: theme('colors.sky.700'),
            },
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.800'),
              },
            },
          },
        },
        lg: {
          css: {
            h2: {
              marginTop: '1rem',
            },
          },
        },
        invert: {
          css: {
            backgroundColor: theme('colors.neutral.700'),
            h3: {
              color: theme('colors.sky.500'),
            },
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.300'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
