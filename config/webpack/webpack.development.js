const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode: 'development',
  entry: ['./src/index.js', 'webpack-hot-middleware/client?reload=true'],
  output: {
    filename: 'js/main.js',
  },
  devServer: {
    hot: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
});
