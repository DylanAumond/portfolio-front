module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      minWidth: {
        '1/2': '50%',
      },
      height: {
        '480': '480px',
      },
      fontFamily: {
        sans: ["Russo One", "sans-serif"],
      },
      colors: {
        black: {
          light: "#2C2C2C",
        },
      },
    },
  },
  plugins: [],
};
