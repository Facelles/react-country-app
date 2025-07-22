/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/index.css'
  ],
  theme: {
    extend: {
      colors: {
        'blue900': 'hsl(209, 23%, 22%)',
        'blue950': 'hsl(207, 26%, 17%)',
        'grey950': 'hsl(200, 15%, 8%)',
        'grey400': 'hsl(0, 0%, 50%)',
        'grey50': 'hsl(0, 0%, 99%)',
        'white': 'hsl(0, 100%, 100%)',
      }
    },
  },
  plugins: [],
}
