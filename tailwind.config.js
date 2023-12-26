/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "red-right": "#FF0000",
      },
      // screens: {
      //   other: { min: "1024px", max: "1396px" },
      // },
    },
  },
  plugins: [],
};
