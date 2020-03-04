const path = require("path");
const fs = require("fs");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require('webpack');

const config = {
  entry: ["./src/js/index.js", "./src/scss/style.scss"],
  output: {
    filename: "./js/bundle.js"
  },
  devtool: "source-map",
  mode: "production",
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        extractComments: true
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, "src/scss"),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: false
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              sourceMap: true,
              plugins: () => [
                require("cssnano")({
                  preset: [
                    "default",
                    {
                      discardComments: {
                        removeAll: true
                      }
                    }
                  ]
                })
              ]
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        use: ["pug-loader"]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({ 
      $: 'jquery',
      jQuery: 'jquery',
      "window.jQuery": "jquery",
      "window.$": "jquery"
    }),
    new MiniCssExtractPlugin({
      filename: "./css/style.bundle.css"
    }),
    new CopyWebpackPlugin([
      {
        from: "./src/blocks/ui-kits-form/img",
        to: "./img"
      },
      {
        from: "./src/blocks/checkbox-list/img",
        to: "./img"
      },
      {
        from: "./src/blocks/review/img",
        to: "./img"
      },
      {
        from: "./src/blocks/ui-kits-cards/img",
        to: "./img"
      },
      {
        from: "./src/blocks/ui-kits-header-footer/img",
        to: "./img"
      },
      {
        from: "./src/blocks/landing-page/img",
        to: "./img"
      },
      {
        from: "./src/blocks/search-room/img",
        to: "./img"
      },
      {
        from: "./src/blocks/room-details/img",
        to: "./img"
      },
      {
        from: "./src/blocks/landing-registration/img",
        to: "./img"
      },
      {
        from: "./src/fonts",
        to: "./fonts"
      },
      {
        from: "./src/favicon",
        to: "./favicon"
      }
    ]),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/pug/index.pug"
    }),
    new HtmlWebpackPlugin({
      filename: "ui-kits-form-elements.html",
      template: "./src/pug/ui-kits-form-elements.pug"
    }),
    new HtmlWebpackPlugin({
      filename: "ui-kits-colors-type.html",
      template: "./src/pug/ui-kits-colors-type.pug"
    }),
    new HtmlWebpackPlugin({
      filename: "ui-kits-cards-elements.html",
      template: "./src/pug/ui-kits-cards-elements.pug"
    }),
    new HtmlWebpackPlugin({
      filename: "ui-kits-header-footer-page.html",
      template: "./src/pug/ui-kits-header-footer-page.pug"
    }),
    new HtmlWebpackPlugin({
      filename: "page-landing-page.html",
      template: "./src/pug/page-landing-page.pug"
    }),
    new HtmlWebpackPlugin({
      filename: "page-search-room.html",
      template: "./src/pug/page-search-room.pug"
    }),
    new HtmlWebpackPlugin({
      filename: "page-room-details.html",
      template: "./src/pug/page-room-details.pug"
    }),
    new HtmlWebpackPlugin({
      filename: "page-landing-registration.html",
      template: "./src/pug/page-landing-registration.pug"
    })
  ]
};

module.exports = (env, argv) => {
  if (argv.mode === "production") {
    config.plugins.push(new CleanWebpackPlugin());
  }
  return config;
};