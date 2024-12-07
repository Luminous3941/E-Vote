/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '300px',
      'xm': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
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

