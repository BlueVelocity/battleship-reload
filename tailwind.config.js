/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00abe1",
        secondary: "#161f6d",
      },
      fontFamily: {
        header: ["New Amsterdam"],
      },
    },
  },
  plugins: [],
};
