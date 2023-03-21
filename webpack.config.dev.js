const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const path = require('path');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'docs'),
    },
    port: 3001,
    hot: true,
  },
  plugins: [new ReactRefreshPlugin()],
});
