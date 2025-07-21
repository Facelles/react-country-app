/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-900': 'hsl(209, 23%, 22%)',       // dark mode elements
        'blue-950': 'hsl(207, 26%, 17%)',       // dark mode background
        'grey-950': 'hsl(200, 15%, 8%)',        // light mode text
        'grey-400': 'hsl(0, 0%, 50%)',          // light mode input
        'grey-50': 'hsl(0, 0%, 99%)',           // light mode background
        'white-pure': 'hsl(0, 100%, 100%)',     // used for both modes
      }
    },
  },
  plugins: [],
}
