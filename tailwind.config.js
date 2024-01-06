/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
    fontFamily:{
      roboto : ["Roboto", 'Be Vietnam Pro','Playfair Display']
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
}

