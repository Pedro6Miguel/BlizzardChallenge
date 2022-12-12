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
        'nav': '#FFFFFF33',
        'costumGrey': '#8F9199',
        'category': '#E5E5E5',
        'dropdown': '#15171B',
        'text': '#9D9D9D',
        'dropnav': '#020203'
      }
    },
    screens: {
      'xxs': '560px',
      'xs': '800px',
      'sm': '980px',
      'md': '1320px',
      'lg': '1440px',
    },
  },
  plugins: [],
}
