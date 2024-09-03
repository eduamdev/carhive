/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "550px",
        md: "950px",
        lg: "1128px",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      maxWidth: {
        "8xl": "86rem",
      },
      keyframes: {
        slider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-100% / var(--slider-total-clones)))",
          },
        },
        "dot-pulse": {
          "0%,100%": {
            transform: "Scale(1)",
            opacity: 1,
          },
          "50%": {
            transform: "scale(1.25)",
            opacity: 0.3,
          },
        },
      },
      animation: {
        slider: "slider 56s linear infinite",
        "dot-pulse": "dot-pulse 1s infinite ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
