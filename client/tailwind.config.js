/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", 
  theme: {
    colors: {
      white: "#ffffff",

      dark: "#404040",
      dark1: "#0F0F0F",
      grad1: "#0D230E",
      grad2: "#2E0B0B",



      silver: "#707070",
      lightSilver:"#9a9a9a",
      veryLight:"#C5C5C5",


    
      
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
  
};
