/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens:{
        lg:'1440px',
        xl:'1440px',
        '2xl':'1440px',
      }
    },
    extend: {
      fontFamily:{
        gemunu:["Gemunu Libre", "sans-serif"],
        open:["Open Sans", "sans-serif"],
        oswald:["Oswald", 'sans-serif'],
        chrimson:["Crimson Text", "serif"],
        
      },

      colors: {
        'gega-red': '#BC1A45',
        'gega-melon': '#FFD369',
        'gega-grey': '#DDDDDD',
        'gega-white': '#F7F7F7',
        'yayla-white':'#CACFD2',
      },
      spacing:{
        '128':'38.5rem'
      },

      

    },
  },
  plugins: [],
}

