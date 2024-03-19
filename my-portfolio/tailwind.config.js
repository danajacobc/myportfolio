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
          display: ["Lato", ...defaultTheme.fontFamily.sans],
          roboto: ["Roboto Slab", ...defaultTheme.fontFamily.sans],
          mont: ["Montserrat", ...defaultTheme.fontFamily.sans],
        }
      },
    },
    plugins: [],
  }