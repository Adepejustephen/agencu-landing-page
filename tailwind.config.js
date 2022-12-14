
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#333333",
        blue: "#0099FF",
        lightBlue: "#F2FAFF;",
        bodyColor: "#494949",
        gray2: "#999999",
        headerBorder: "rgba(0, 153, 255, 0.04)",
        footerBg: 'rgba(0, 153, 255, 0.04)',
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      minHeight: {
        medium: '21.75rem',
        "400": "25rem"
      },
      width: {
        "320": "20rem",
        "576": "36rem",
        "800": "50rem",
        "900": "56.25rem"
      }
     
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  
  ],
};
