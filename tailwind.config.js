/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
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
  plugins: [],
};
