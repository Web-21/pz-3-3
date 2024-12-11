//webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './app/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000,
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ },
      { test: /\.scss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
      { test: /\.(png|jpg|gif|svg)$/, use: 'file-loader' },
      { test: /\.html$/, use: 'html-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './app/index.html' }),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({ ENV: JSON.stringify('development') }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
};

