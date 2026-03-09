/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./perde.html",
    "./kurumsal.html",
    "./iletisim.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Lora", "Playfair Display", "serif"],
        sans: ["Inter", "Montserrat", "sans-serif"],
      },
      colors: {
        // index.html (Arduç ana sayfa)
        "arduc-beige": "#F4EFDF",
        "arduc-sage": "#657962",
        "arduc-coffee": "#8B6D4C",
        "arduc-anthracite": "#1E293B",
        // perde, kurumsal, iletişim
        cream: {
          50: "#fdfcfb",
          100: "#f9f6f2",
          200: "#f0ebe3",
          300: "#e5ddd0",
          400: "#d4c4b0",
        },
        beige: {
          100: "#f5f0e8",
          200: "#e8dfd0",
          300: "#ddd2c0",
        },
        sage: {
          500: "#6b7f6a",
          600: "#5a6d59",
          700: "#4a5c49",
        },
        anthracite: {
          700: "#3d4257",
          800: "#2d3142",
          900: "#0f172a",
        },
        coffee: {
          400: "#a0826d",
          500: "#8b7355",
          600: "#7a6349",
        },
      },
    },
  },
  plugins: [],
};
