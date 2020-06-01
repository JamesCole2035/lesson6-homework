const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: __dirname + '/dist',
    filename: "main.js",
  },
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/html/index.html'})
  ],
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
			"style-loader",
            "css-loader",
			"sass-loader",
        ],
      },
    ],
  },
};

