/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        LexendDeca: ["Lexend Deca", "sans-serif"],
        BigShouldDisplay: ["Big Shoulders Display", "sans-serif"],
      },

      colors: {
        BrightOrange: 'hsl(31, 77%, 52%)',
        DarkCyan: 'hsl(184, 100%, 22%)',
        VeryDarkCyan: 'hsl(179, 100%, 13%)',
        VeryLightGray: 'hsl(0, 0%, 95%)', 
        TransparentWhite: 'hsla(0, 0%, 100%, 0.75)'
      }
    },
  },
  plugins: [],
}

