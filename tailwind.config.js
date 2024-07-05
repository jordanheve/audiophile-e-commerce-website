/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#D87D4A'
      },
      fontFamily: {
        'manrope': ['Manrope'],
      },
    },
  },
  plugins: [],
}

