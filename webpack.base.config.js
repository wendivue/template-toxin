const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
};

const templatePages = fs.readdirSync(`${PATHS.src}/pages`);

const addTemplate = () => {
  return templatePages.map((page) => {
    return { [page]: `${PATHS.src}/pages/${page}/${page}.js` };
  });
};

let templateEntry = addTemplate();
templateEntry = Object.assign({}, ...templateEntry);

const config = {
  entry: templateEntry,
  output: {
    filename: './js/[name].js',
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      Typography: path.resolve(__dirname, `${PATHS.src}/scss/_global-typography`),
      Vars: path.resolve(__dirname, `${PATHS.src}/scss/_vars`),
      FontsScss: path.resolve(__dirname, `${PATHS.src}/scss/_fonts`),
      Libs: path.resolve(__dirname, `${PATHS.src}/scss/_libs`),
      Reset: path.resolve(__dirname, `${PATHS.src}/scss/_reset`),
      Layout: path.resolve(__dirname, `${PATHS.src}/layout`),
      Blocks: path.resolve(__dirname, `${PATHS.src}/blocks`),
      Pages: path.resolve(__dirname, `${PATHS.src}/pages`),
      Fonts: path.resolve(__dirname, `${PATHS.src}/fonts`),
    },
  },

  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        include: PATHS.src,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: () => [
                require('cssnano')({
                  preset: [
                    'default',
                    {
                      discardComments: {
                        removeAll: true,
                      },
                    },
                  ],
                }),
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'img/',
            name: '[name].[ext]',
          },
        },
      },
      {
        test: /\.(woff2|woff|ttf|otf|eot)$/i,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'fonts/',
            name: '[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin([
      {
        from: `${PATHS.src}/fonts`,
        to: './fonts',
      },
      {
        from: `${PATHS.src}/favicon`,
        to: './favicon',
      },
    ]),
  ],
};

templatePages.forEach((page) => {
  config.plugins.push(
    new HtmlWebpackPlugin({
      filename: `${page}.html`,
      template: `${PATHS.src}/pages/${page}/${page}.pug`,
      chunks: [`${page}`, 'vendors'],
    })
  );
});

module.exports = config;
