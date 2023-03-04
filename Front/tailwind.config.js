/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backMint: "#43D8CF",
        borderMint: "#26CAC0",
        backwhite: "#F8F9FC",
        textWhite: "#FFFFFF",
        textRed: "#FF7676",
      },
      spacing: {
        header: "66px",
        sidebar: "250px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
