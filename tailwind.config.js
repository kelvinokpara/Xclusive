// @type {import('tailwindcss').Config}
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        goldHue: "#FFAD33",
        redHue: "#db4444",
        greenHue1: "#0F6",
      },
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter, sans-serif",
      },
    },
  },

  plugins: [],
};
