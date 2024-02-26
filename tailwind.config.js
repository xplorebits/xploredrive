const colors = require('tailwindcss/colors')

export default {
  content: ['./index.html', './src/renderer/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'var-1': '#0C0A13',
        'body-dark': '#929299',
        'body-light': colors.neutral[600],
        'primary-dark': '#4B97F7',
        'primary-light': '#4B97F7',
        'input-bg-dark': '#292B38',
        'input-bg-light': '#292B38',
        'input-border-dark': '#313240',
        'input-border-light': '#E4E4E7',
        'list-item-dark': '#272936',
        'list-item-light': '#E0E0E3',
        'line-light': '#F4F4F5',
        'line-dark': '#2D2E3A'
      }
    }
  },
  plugins: []
}
