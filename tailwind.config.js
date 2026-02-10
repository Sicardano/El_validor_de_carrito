/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'off-white': '#F7F7F7',
        'pure-white': '#FFFFFF',
        'dark-charcoal': '#212121',
        'earthy-green': '#2D5A27',
        'dark-green-hover': '#1d3817',
        'light-grey': '#EDEDED',
        'grey-medium': '#999999',
        'grey-light': '#FAFAFA',
        'warning-earth': '#D4A574',
        'error-soft': '#C1666B'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'light': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'card': '0 10px 25px rgba(0, 0, 0, 0.05)',
        'elevated': '0 20px 40px rgba(0, 0, 0, 0.12)',
      }
    }
  },
  plugins: [],
}
