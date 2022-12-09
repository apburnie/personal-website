module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        DEFAULT: '-6px -6px 26px 0 rgba(230, 230, 230, 0.83), 6px 6px 16px 0 rgba(150, 150, 150, 0.51)' 
      }
    }
  },
}
