/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brutal: {
          black: '#1a1a1a',
          yellow: '#F9FF00',
          red: '#FF0004',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderWidth: {
        '3': '3px',
      },
      spacing: {
        'brutal': '1.5px',
      }
    },
  },
  plugins: [],
}
