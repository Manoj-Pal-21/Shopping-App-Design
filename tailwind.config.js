/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'custom': '14.41px', 
      },
      lineHeight: {
        'custom': '28.13px', 
      },
      fontWeight: {
        'custom': 400, 
      },
      colors: {
        'custom-orange': '#EB662B',
        'text-dark': '#05073C'
      },
    },
  },
  plugins: [],
}