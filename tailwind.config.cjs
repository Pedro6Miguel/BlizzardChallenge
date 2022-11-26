/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#00AEFF',
        'nav': '#FFFFFF33'
      }
    },
  },
  plugins: [],
}
