/** @type {import('tailwindcss').Config} */
const flowbite = require('flowbite-react/tailwind')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  darkMode:"class",
  theme: {
    extend: {
      screens:{
        "usm":{'min':"340px" , "max":"1200px"}
      }
    },
    
  },
  plugins: [
    flowbite.plugin(),
  ],
  
}

