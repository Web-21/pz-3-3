const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './app/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: 'html-loader', // Для корректной обработки HTML
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html', // Путь к исходному HTML-файлу
      filename: 'index.html',       // Имя файла в dist
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8080,
    open: true,
  },
};
