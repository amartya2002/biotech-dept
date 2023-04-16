/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",

      dark: "#404040",

      silver: "#707070",

      black: "#000000",
      
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin', 'tailwind-scrollbar-hide')],
  
};
