const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Kate's Kitchen",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
  module: {
    rules: [
      // {
      //   test: /\.css$/i,
      //   use: ["style-loader", "css-loader"],
      // },
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: ["style-loader", "css-loader", "sass-loader"],
      // },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  /*   optimization: {
    runtimeChunk: "single",
  }, */

  ////////////////////////////////////////////////////////////////
};
