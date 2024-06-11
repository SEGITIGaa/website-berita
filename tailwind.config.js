/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark' : '#0c0c0c',
        'light-grey' : '#f5f5f5',
      },
      fontFamily:{
        'poppins' : 'Poppins',
      }
    },
  },
  plugins: [],
}