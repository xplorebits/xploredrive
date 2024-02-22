const colors = require('tailwindcss/colors')

export default {
  content: ['./index.html', './src/renderer/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'body-text-dark': '#929299',
        'body-text-light': colors.neutral[600],
        'primary-dark': '#4B97F7',
        'primary-light': '#4B97F7'
      }
    }
  },
  plugins: []
}
