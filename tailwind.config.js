/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen-lg': '960px',
      }
    },
  },
  plugins: [],
}
