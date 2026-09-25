/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './src/**/*.css'],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#f8f5ef',
          100: '#f1eadb',
          200: '#e3d6b7',
          300: '#d3bb87',
          400: '#b99052',
          500: '#9a7136',
          600: '#79572d',
          700: '#5f4325',
          800: '#433120',
          900: '#2d2119'
        },
        moss: {
          50: '#edf7f2',
          100: '#d9efe4',
          200: '#b9dfc8',
          300: '#8bc4a1',
          400: '#5fa77d',
          500: '#3d875f',
          600: '#2d6d49',
          700: '#214f39',
          800: '#173a2b',
          900: '#122c22'
        },
        clay: '#d9774a',
        sand: '#f4efe7'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(49, 43, 32, 0.08)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
