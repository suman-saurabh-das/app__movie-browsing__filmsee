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
        // bgDarkPrimary: '#0a0a0a',
        bgDarkPrimary: '#2A2A2A',
        bgDarkSecondary: '#171717',
      }
    },
  },
  plugins: [],
}