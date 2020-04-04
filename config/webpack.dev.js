const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    // babel-polyfill inside the array before main
    main: ["./src/main.js"],
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  devServer: {
    contentBase: "dist",
    overlay: true,
    hot: true,
    stats: {
      colors: true,
    },
    devtool: 'source-map'
  },
  module: {
    rules: [
      {
        test: /\/js$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              attributes: {
                list: [
                  {
                    // Tag name
                    tag: "img",
                    // Attribute name
                    attribute: "src",
                    // Type of processing, can be `src` or `scrset`
                    type: "src",
                  },
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HTMLWebpackPlugin({
          template: "./src/index.html"
      })
    
    ],
};
