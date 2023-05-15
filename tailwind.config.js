/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      maxWidth: {
        "screen-lg": "960px",
      },
      colors: {
        "gradient-oeth-from": "#b362e6",
        "gradient-oeth-to": "#6a36fc",
        "origin-white": "#fafafb",
      },
    },
  },
  plugins: [],
};
