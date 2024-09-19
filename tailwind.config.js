/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors:{
        card: '#fff5ff',
        cardDark:'#200e38',
        fundo: '#131319',
        header:'#130f15',
        listHeader:'#130f15'
      }
    },
  },
  plugins: [],
}

