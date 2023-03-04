module.exports = {
    content: [
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_pages/**/*.html',
      './*.html',
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
        },
      },
    },
    variants: {},
    plugins: [
      require('@tailwindcss/typography'),
    ],
}