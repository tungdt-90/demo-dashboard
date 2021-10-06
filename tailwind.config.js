module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Inter']
    },
    extend: {
      colors: {
        primary: '#5c60f5',
        body: '#16192c',
        'surface-secondary': '#f5f9fc',
        formControl: '#eef0f5'
      },
      fontWeight: {
        bolder: 'bolder'
      },
      fontSize: {
        '4.5xl': '2.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
