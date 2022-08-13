/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      screens: {
        ph: { max: "500px" },
        // => @media (max-width: 500px)  { ... }
        mb: { max: "400px" },
        // => @media (max-width: 400px)  { ... }
      },
      colors: {
        primary: { 200: "#fca103", 100: "#fcb335" },
        secondary: { 200: "#0335fc", 100: "#355dfc" },
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
