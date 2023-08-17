/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#8ACC50",
        secondary: "#116355",
        dark: "#040404",
        darkest: "#000000",
        base: "#fff",
      },
      backgroundImage: {
        "hero-pattern": "url('../../images/bg_hero.svg')",
      },
    },
  },
  plugins: [],
};
