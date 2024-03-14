/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          600: "#2F855A",
        },
        navGreen: "#43a440",
        sidebar: "#f8f8f8",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontWeight: {
        thin: 100,
        extraLight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      fontStyle: {
        normal: "normal",
        italic: "italic",
      },
    },
  },
  plugins: [],
};
