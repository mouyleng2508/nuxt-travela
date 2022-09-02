module.exports = {
  purge: [],
  content: ["./src/**/*.{html,js}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#1c2942',
        'secondary': '#1671d6'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
