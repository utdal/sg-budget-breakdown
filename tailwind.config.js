/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./pages/**/*.{js,ts,jsx,tsx,html}",
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
