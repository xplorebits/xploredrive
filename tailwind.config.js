const colors = require('tailwindcss/colors')

export default {
  content: ['./index.html', './src/renderer/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'body-text-dark': '#929299',
        'body-text-light': colors.neutral[600],
        'primary-dark': '#4B97F7',
        'primary-light': '#4B97F7',
        'input-bg-dark': '#292B38',
        'input-bg-light': '#292B38',
        'input-border-dark': '#313240',
        'input-border-light': '#313240'
      }
    }
  },
  plugins: []
}
