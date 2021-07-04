const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
      new ESLintPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(.js|.jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
