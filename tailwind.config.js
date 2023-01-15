/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      glass: "rgba(225, 225, 225, 0.3)",
      shade: "rgba(1, 1, 1, 0.9)",
      greyish: "rgba(225, 225, 220, 0.1)",
      buttomish: "rgba(25, 25, 20, 0.4)",
      red: "rgb(225, 0, 0)",
    },
    backgroundImage: {
      hero: "url('/src/images/yoz-3.jpg')",
    },
  },
  plugins: [require("daisyui")],
};
