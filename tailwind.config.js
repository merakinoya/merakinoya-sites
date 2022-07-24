module.exports = {
  //purge: [],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './helpers/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'playfairdisplay': ['Playfair Display', 'serif'],
      'circular': ['Circular Std Bold', 'sans-serif'],
      sans: ['Google Sans', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
      'playfairdisplay': ['Playfair Display', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}