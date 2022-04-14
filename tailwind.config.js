module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      primary: ['Spartan', 'sans-serif'],
      secondary: ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#006F54',
      },
      height: {
        '1/2-screen': '50vh',
      },
    },
  },
  plugins: [],
}
