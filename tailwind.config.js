module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    extend: {}
  },
  plugins: []
}
