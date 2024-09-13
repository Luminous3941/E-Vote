/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.5rem',
        'custom-sm': '0.625rem'
      },
    },
  },
  variants: {},
  plugins: [],
}

