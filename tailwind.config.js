/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spine-teal': '#1a5f5f',
        'spine-teal-dark': '#0d3d3d',
        'spine-tan': '#d4b896',
        'spine-tan-light': '#e8dcc8',
      },
    },
  },
  plugins: [],
}
