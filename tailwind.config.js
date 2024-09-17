/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      animation: {
        twinkle: "twinkle 5s ease-in-out infinite",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: 0, transform: "translateY(0)" },
          "50%": { opacity: 1, transform: "translateY(-20px)" },
        },
      },
    },
  },
};
