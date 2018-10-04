const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, '../../build'),
  },
  resolve: {
    extensions: ['.js', '.jsx', 'scss'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]',
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|woff(2)?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '../',
              context: 'src/',
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['build'], {
      root: process.cwd(),
      verbose: true,
      dry: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};
