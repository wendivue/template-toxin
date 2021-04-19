const baseConfig = require('./webpack.base.config');
const path = require('path');
const { merge } = require('webpack-merge');

const developmentConfig = merge(baseConfig, {
  mode: 'development',
  devServer: {
    index: 'index.html',
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: 8079,
  },
});

module.exports = () => {
  return developmentConfig;
};
