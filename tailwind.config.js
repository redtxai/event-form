/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },

      // customization not working \/
      colors: {
      'regal-blue': '#243c5a',
      },
      letterSpacing: {
        tightish: '-.015em',
      },
      // customization not working /\
      
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
