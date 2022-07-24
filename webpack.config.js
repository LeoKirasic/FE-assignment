const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/hr-management/index.js',
    crypto: './src/crypto/crypto.js',
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/hr-management/index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'crypto.html',
      template: 'src/crypto/crypto.html',
      chunks: ['exampleEntry'],
    })],
};
