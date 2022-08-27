module.exports = {
  content: [
      './public/index.html',
      './src/**/*.{html,js,vue}'
  ],
  theme: {
    extend: {
      colors:{
        mydark:{
          800:'#1e2022',
          900:'#1b1d1e',
        },
      },
    },
  },
  darkMode:'class',
  plugins: [],
}
