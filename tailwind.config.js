/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/html/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
     
      // fontFamily:{
      //   messina : [ 'Messina Sans', 'sans-serif']
      // },
      backgroundSize: {
        
        'half': '449px 420px',
        'sm': '340px 322px',
        'xsm': '250px 200px',
      }
    },
  },
  plugins: [],
})