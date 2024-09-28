import { Input } from 'postcss';

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
        listHeader:'#130f15',
        darkContact: '#1b1b24',
        inputContact:'#262632',
        btnLight:'#e1d6e9',
        lightContact:'#f4f0f7',
        btnHover:'#d6c9e2'
      }
    },
  },
  plugins: [],
}

