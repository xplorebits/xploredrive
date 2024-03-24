// const colors = require('tailwindcss/colors')

export default {
  darkMode: 'selector',
  content: ['./index.html', './src/renderer/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'var-1': '#0C0A13',
        body: '#929299',
        primary: '#4B97F7',
        'input-bg': '#292B38',
        'input-border': '#313240',
        'list-item': '#272936',
        line: '#2D2E3A'
      }
    }
  },
  plugins: []
}
