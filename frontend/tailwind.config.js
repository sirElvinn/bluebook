/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#003f87",
        "on-primary": "#ffffff",
        "primary-container": "#0056b3",
        "on-primary-container": "#bbd0ff",
        "primary-fixed": "#d7e2ff",
        surface: "#f8f9fa",
        "on-surface": "#191c1d",
        "on-surface-variant": "#424752",
        "surface-container-low": "#f3f4f5",
        "outline-variant": "#c2c6d4",
        // Add more colors from your original HTML if needed
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "56px", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "700" }],
        "title-lg": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px" }],
        "body-md": ["16px", { lineHeight: "24px" }],
      }
    },
  },
  plugins: [],
}