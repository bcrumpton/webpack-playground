const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
    collection: "./src/collection.js",
  },
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "js/[name].bundle.js",
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(svg|ico|png|webp|jpg|gif|jpeg,otf)$/,
        type: "asset/resource",
      },
    ],
  },
};
