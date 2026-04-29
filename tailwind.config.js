/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3A7C8C",
        secondary: "#2B6CB0",
        accent: "#4FD1C5",
        accentDark: "#38B2AC",
        background: "#FFFFFF",
        section: "#F7FAFC",
        card: "#EDF2F7",
        textPrimary: "#1A202C",
        textSecondary: "#4A5568",
        textLight: "#718096",
        border: "#E2E8F0"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
