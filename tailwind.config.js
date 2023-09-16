/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDarkPrimary: '#2A2A2A',
        bgDarkSecondary: '#171717',
      },
      fontFamily: {
        primary: ['Red Hat Display']
      }
    },
  },
  plugins: [],
}