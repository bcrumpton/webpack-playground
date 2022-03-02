const path = require("path");
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

const mapFilenamesToEntries = (pattern) =>
  glob.sync(pattern).reduce((entries, filename) => {
    const [, name] = filename.match(/([^/]+)\.scss$/);
    return { ...entries, [name]: filename };
  }, {});

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    collection: "./src/collection.js",
    ...mapFilenamesToEntries("./src/**/*.scss"),
  },
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "js/[name].js",
    clean: true,
  },
  plugins: [
    new RemoveEmptyScriptsPlugin(),
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
