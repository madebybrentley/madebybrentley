/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFFDF8",
        butter: "#F6D979",
        softblue: "#B3CBE4"
      },
      fontFamily: {
        garamond: ["EB Garamond", "serif"],
        playfair: ["Playfair Display", "serif"]
      }
    },
  },
  plugins: [],
};

