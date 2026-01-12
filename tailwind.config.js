/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#64ffda",
        "white-text": "#ffffff",
        "light-gray": "#ccd6f6",
        primary: "#0a192f",
        secondary: "#112240",
      },
      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(24px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        scaleIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.96)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        marquee: {
          "0%": {
            transform: "translate3d(0,0,0)",
          },
          "100%": {
            transform: "translate3d(-50%,0,0)",
          },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.9s ease-out forwards",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};