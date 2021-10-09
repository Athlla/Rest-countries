module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
      },
      width: {
        'one-column': '256px',
        'two-columns': '552px',
        'three-columns': '848px',
        'four-columns': '1144px',
        'five-columns': '1440px',
      },
      boxShadow: {
        average: '0px 0px 10px 5px rgba(0, 0, 0, 0.06)',
      },
      colors: {
        'dark-blue': 'hsl(209, 23%, 22%)',
        'very-dark-blue': 'hsl(207, 26%, 17%)',
        'very-dark-blue': 'hsl(200, 15%, 8%)',
        'dark-gray': 'hsl(0, 0%, 52%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
      },
    },
  },
  variants: {
    extend: {},
  },
};
