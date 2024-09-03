/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
        'pacifico': ['"Pacifico"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

