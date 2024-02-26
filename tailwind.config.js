/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        purple : '#7723C9',       
      },

      fontFamily: {
        nunito : ['Nunito', 'sans-serif']
      },

      spacing : {
        7.5 : '30px',
        15 : '59.5px',
        17 : '68px',
        18 : '72px',
        22 : '88px',
      },

      fontSize: {
        xxs: ['10px', '12px'],
      },
      
    },
  },
  plugins: [],
}

