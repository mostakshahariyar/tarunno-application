/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://i.ibb.co/fY2xZBG/contactpage.jpg')",
      }
    },
  },
  plugins: [],
}