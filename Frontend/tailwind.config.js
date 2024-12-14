/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Poppins' : ['Poppins', 'sans-serif'],
      'Inter' : ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary-color' : '#141517',
        'second-color' : '#52fc18',
        'three' : '#333',
        'border-color' : '#494d55',
      }
    },
  },
  plugins: [],
}