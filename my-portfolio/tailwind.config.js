/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          display: ["Lato", 'sans-serif'],
          roboto: ["Roboto Slab", 'sans-serif'],
          Raleway: ["Raleway", 'sans-serif'],
        }
      },
    },
    plugins: [],
  }