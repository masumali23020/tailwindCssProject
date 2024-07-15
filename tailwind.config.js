/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
     
      fontFamily:{
        messina : [ 'Messina Sans', 'sans-serif'],

      },
      backgroundSize: {
        
        'half': '449px 420px',
        'sm': '340px 322px',
        'xsm': '250px 200px',
      }
    },
  },
  plugins: [],
}