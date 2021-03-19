const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
};

const pages = [
  'index',
  'ui-kits-cards',
  'ui-kits-color',
  'ui-kits-form',
  'ui-kits-header-footer',
  'landing-page',
  'landing-sign-in',
  'landing-registration',
  'search-room',
  'room-details',
];

const config = {
  entry: `${PATHS.src}/index.js`,
  output: {
    filename: './js/bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      Src: path.resolve(__dirname, PATHS.src),
      Dist: path.resolve(__dirname, PATHS.dist),
      Typography: path.resolve(__dirname, `${PATHS.src}/scss/_global-typography`),
      Vars: path.resolve(__dirname, `${PATHS.src}/scss/_vars`),
      Layout: path.resolve(__dirname, `${PATHS.src}/layout`),
      Blocks: path.resolve(__dirname, `${PATHS.src}/blocks`),
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
              url: false,
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

pages.forEach((page) => {
  config.plugins.push(
    new HtmlWebpackPlugin({
      filename: `${page}.html`,
      template: `${PATHS.src}/pages/${page}/${page}.pug`,
    })
  );
});

module.exports = config;
