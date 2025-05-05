/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#BDBDBD',
        secondary: '#EAB308',
        text: '#14171A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

