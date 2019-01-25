const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  entry: './src/like_button.js',
  output: {
    filename: 'like_button.js',
    path: path.resolve(__dirname, 'dist')
  }
};