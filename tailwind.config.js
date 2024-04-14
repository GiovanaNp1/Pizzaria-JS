/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '9/12': '75%',
        '2/4': '50%'
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        kanitThin: ["Kanit", "sans-serif"]
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
}

