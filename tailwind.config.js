/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        para: ["Montserrat"],
        title: ["Raleway"],
      }
    },
  },
  plugins: [],
};
