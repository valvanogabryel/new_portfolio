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
        background_color_darker: '#00000066',
        dark_gray: '#413F42',
        light_gray: '#7F8487'
      },
      fontFamily: {
        'logo': ['Sedgwick Ave Display', 'cursive'],
        'main-simple': ['Josefin Sans', 'sans-serif']
      },
      // keyframes: {
      //   fast_spin_kf: {
      //     '0%': {
      //       'transform': 'rotate(0)'
      //     },
      //     '100%': {
      //       'transform': 'rotate(360deg)'
      //     }
      //   }
      // },
      // animation: {
      //   fast_spin: 'fast_spin_kf .3s cubic-bezier(.36,.07,.19,.97)'
      // }
    }
  },
  plugins: [],
}

