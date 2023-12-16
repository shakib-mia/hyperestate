/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1440px",
      "3xl": "1920px",
      "4xl": "2560px",
    },
    fontSize: {
      "7xl": "4.5rem", // h1
      "6xl": "3.125rem", // h2
      "5xl": "2.8125rem", // h3
      "4xl": "1.75rem", // h4
      "3xl": "1.5rem", // h5
      "2xl": "1.4375rem", // h6
      xl: "1.375rem",
      lg: "1.25rem",
      md: "1.125rem",
      base: "1rem",
      sm: "0.875rem",
      xs: "0.8125rem",
      xxs: "0.75rem",
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      accent: {
        DEFAULT: "#FF3F3F",
        20: "#FF3F3F33",
        dark: "#CC2C2C",
      },
      transparent: "#00000000",
    },
    extend: {},
  },
  plugins: [],
};
