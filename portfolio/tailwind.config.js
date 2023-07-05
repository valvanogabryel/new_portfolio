/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ED2B2A",
        pinkRose: "#D71A67",
        purpleMagenta: "#A53B8B",
        deepLavender: "#674D91",
        navyBlue: "#36507B",
        darkSlateBlue: "#2F4858",
        // Dark Theme Only
        background_color: "#16003B",
        background_color_darker: "#00000066",
        dark_gray: "#413F42",
        light_gray: "#7F8487",
        // Light Theme Only
        background_color_light: "#FFFDFA",
        light_red_light: "#EE7979",
        red_light: "#B82727",
        dark_red_light: "#6B3737",
      },
      fontFamily: {
        logo: ["Sedgwick Ave Display", "cursive"],
        "main-simple": ["Josefin Sans", "sans-serif"],
        "secondary-simple": ["Montserrat", "sans-serif"],
      },
      keyframes: {
        // ANIMATED__BORDERS
        border_top_spin_kf: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        border_left_spin_kf: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(100%)",
          },
        },
        border_bottom_spin_kf: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        border_right_spin_kf: {
          "0%": {
            transform: "translateY(100%)",
          },
          "100%": {
            transform: "translateY(-100%)",
          },
        },
        fade_up_kf: {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        grow_up_kf: {
          from: {
            opacity: "0",
            height: "0px",
          },
          to: {
            opacity: "1",
            height: "90px",
          },
        },
      },
      animation: {
        border_top_spin: "border_top_spin_kf 2s linear infinite",
        border_left_spin: "border_left_spin_kf 2s linear 1s infinite",
        border_bottom_spin: "border_bottom_spin_kf 2s linear infinite",
        border_right_spin: "border_right_spin_kf 2s linear 1s infinite",
        fade_up: "fade_up_kf 0.3s linear",
        grow_up: "grow_up_kf 3s linear",
      },
    },
  },
  plugins: [],
};
