module.exports = {
    content: [
      "./index.html", 
      "./**/*.html",   // To include all other HTML files in the folder (if any)
      "./**/*.css",    // To include any CSS files you may use
    ],
    theme: {
      extend: {
        fontFamily: {
          blackops: ['Black Ops One', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  