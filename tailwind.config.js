/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#112D4E",
        alternative: "#DBE2EF",
        primarybg: "#F9F7F7",
        alternativebg: "#3F72AF",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
