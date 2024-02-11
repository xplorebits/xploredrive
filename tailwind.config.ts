import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'mariner': {
          '50': '#f0f7fe',
          '100': '#ddedfc',
          '200': '#c3e0fa',
          '300': '#9acdf6',
          '400': '#6bb1ef',
          '500': '#4893e9',
          '600': '#3377dd',
          '700': '#2b64cf',
          '800': '#2850a5',
          '900': '#264682',
          '950': '#1b2c50',
        }   
      }
    }
  }
}
