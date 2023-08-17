/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
 

      colors: {
        primary: "#8ACC50",
        secondary: "#116355",
        dark: "#454545",
        darkest: "#000000",
        base: "#fff",
      },


      backgroundImage: {
        "hero-pattern": "url('../../images/bg_hero.svg')",
      },


      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        para: ["Montserrat"],
        title: ["Raleway"],
      }

    },
  },
  plugins: [],
};
