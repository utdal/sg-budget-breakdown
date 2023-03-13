/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_pages/**/*.html',
      './*.html',
      './assets/js/*.js'
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#e87500',
          },
          secondary: {
            DEFAULT: '#154734',
          },
          'utd-orange': '#e87500',
          'utd-green': '#154734'
        },
      },
    },
    variants: {},
    plugins: [
      require('@tailwindcss/typography'),
    ],
}
