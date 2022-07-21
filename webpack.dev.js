const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      //   {
      //     test: /\.css$/i,
      //     use: ["style-loader", "css-loader"],
      //   },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: ["style-loader", "css-loader", "sass-loader"],
      // },
      //       {
      //         test: /\.(s(a|c)ss)$/,
      //         use: ["style-loader", "css-loader", "sass-loader"],
      //       },
    ],
  },
});
