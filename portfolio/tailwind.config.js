/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ED2B2A',
        background_color: '#16003B',
        dark_gray: '#413F42',
        light_gray: '#7F8487'
      },
      fontFamily: {
        'logo': ['Sedgwick Ave Display', 'cursive']
      }
    }
  },
  plugins: [],
}

