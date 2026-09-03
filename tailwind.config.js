/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          gold: "#D8973C",
          richGold: "#CAA229",
          wine: "#AE6619",
          deepWine: "#AE2831",
          rose: "#FF5C8D",
          softRose: "#FF93B3",
          pink: "#E23E6E",
          blush: "#F4DDE4",
          mutedRose: "#B3797F",
          dustyRose: "#C9595F",
          cream: "#FFF9F5",
          dark: "#24151A",
        },
      },

      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Montserrat", "sans-serif"],
      },

      boxShadow: {
        luxury: "0 20px 60px rgba(36, 21, 26, 0.12)",
      },
    },
  },
  plugins: [],
};