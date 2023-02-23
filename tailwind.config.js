const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", ...fontFamily.serif],
        mono: ["IBM Plex Serif", ...fontFamily.mono],
      },
    },
  },
  plugins: [],
};
