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
        'main-simple': ['Josefin Sans', 'sans-serif'],
        'secondary-simple': ['Montserrat', 'sans-serif']
      },
      keyframes: {
        // ANIMATED__BORDERS
        border_top_spin_kf: {
          '0%': {
            'transform': 'translateX(-100%)'
          },
          '100%': {
            'transform': 'translateX(100%)'
          }
        },
        border_left_spin_kf: {
          '0%': {
            'transform': 'translateY(-100%)'
          },
          '100%': {
            'transform': 'translateY(100%)'
          }
        },
        border_bottom_spin_kf: {
          '0%': {
            'transform': 'translateX(100%)'
          },
          '100%': {
            'transform': 'translateX(-100%)'
          }
        },
        border_right_spin_kf: {
          '0%': {
            'transform': 'translateY(100%)'
          },
          '100%': {
            'transform': 'translateY(-100%)'
          }
        }
      },
      animation: {
        border_top_spin: 'border_top_spin_kf 2s linear infinite',
        border_left_spin: 'border_left_spin_kf 2s linear 1s infinite',
        border_bottom_spin: 'border_bottom_spin_kf 2s linear infinite',
        border_right_spin: 'border_right_spin_kf 2s linear 1s infinite',
      }
    }
  },
  plugins: [],
}

