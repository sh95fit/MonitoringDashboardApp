/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple" : "#081A51",
        "light-white" : "rgba(255,255,255,0.17)",
      }
    },
  },
  plugins: [require('daisyui')],
}

