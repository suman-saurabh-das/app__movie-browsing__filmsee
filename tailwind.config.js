/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgLightPrimary: '#B5EAFF',
        bgLightSecondary: '#B5EAFF',
        bgDarkPrimary: '#0a0a0a',
        bgDarkSecondary: '#171717',
      }
    },
  },
  plugins: [],
}