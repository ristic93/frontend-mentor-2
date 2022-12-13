/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          green: "hsl(163, 72%, 41%)",
          red: "hsl(356, 69%, 56%)",
          faceBook: "hsl(208, 92%, 53%)",
          twitter: "hsl(203, 89%, 53%)",
          youTube: "hsl(348, 97%, 39%)",
          instagram1: 'hsl(37, 97%, 70%)',
          instagram2: 'hsl(329, 70%, 58%)',
          text: "hsl(228, 34%, 66%)"
        },
        dark: {
          darkBg: "hsl(230, 17%, 14%)",
          darkTopBg: "hsl(232, 19%, 15%)",
          darkCardBg: "hsl(228, 28%, 20%)",
          hoverCardBg: "hsl(229, 23%, 29%)",
          white: "hsl(0, 0%, 100%)"
        },
        light: {
          white: "hsl(0, 0%, 100%)",
          lightTopBg: "hsl(225, 100%, 98%)",
          lightCardBg: "hsl(227, 47%, 96%)",
          hoverCardBg: "hsl(227, 35%, 90%)",
          blackText: "hsl(230, 17%, 14%)"
        }
      },
      screens: {
        xs: "375px",
        ss: "620px",
      }
    },
  },
  darkMode: "class",
  plugins: [],
}
