/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        an1: "an1 ease 1s infinite",
      },
      keyframes: {
        an1: {
          "0%": {
            transform: "rotate(0turn)",
          },
          "100%": {
            transform: "rotate(1turn)",
          },
        },
      },
    },
  },
  plugins: [],
};
