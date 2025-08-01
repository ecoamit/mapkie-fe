/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lexend", "var(--font-lexend)", "var(--font-geist-sans)", "var(--font-geist-mono)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
