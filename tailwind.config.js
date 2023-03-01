/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["**/*.html"],
  theme: {
    extend: {
      colors: {
        black111: "#111",
        black222: "#222",
        black333: "#333",
        black444: "#444",
        black555: "#555"
      },
      screens: {
        'xsm': '600px',
        '2xsm': '100px'
      },
      spacing: {
        'm-13': '50px',
        'm-15': '60px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}