/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        md: '4rem',
        lg: '8rem',
        xl: '8rem',
        '2xl': '14rem',
      },
    },
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
        'oswald': ['Oswald', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        '2xl': '1440px',
        // => @media (min-width: 992px) { ... }
      },
      colors: {
        light: "#F8F8F8",
        primary: {
          DEFAULT: "#EB539F",
          light: "#FDEEF6"
        },
        secondary: "#FFF94F",
        dark: "#3D0E26"
      },
      borderRadius: {
        20: '20px',
      },
      dropShadow: {
        'card-primary': '0 12px 20px rgba(235, 83, 159, 0.18)',
      }
    },
  },
  plugins: [],
} 