module.exports = {
  content: [
      './public/index.html',
      './src/**/*.{html,js,vue}'
  ],
  theme: {
    extend: {
      colors:{
        mydark:{
          800:'#232526',
          900:'#1b1d1e',
        },
      },
    },
  },
  darkMode:'class',
  plugins: [],
}
