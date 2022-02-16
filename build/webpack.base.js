'use strict';

const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin');

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

const baseConfig = {
  output: {
    filename: 'index.js',
    path: resolve('dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader',
          // {
          //   loader: 'ts-loader',
          //   options: {
          //     transpileOnly: true,
          //   }
          // }
        ],
        exclude: '/node_modules/'
      },
      {
        test: /\.(js|ts)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: false,
          extensions: ['.js', '.ts'],
          cache: false,
          emitWarning: true,
          emitError: false
        },
      }
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
  ],
  cache: {
    type: 'memory',
    cacheUnaffected: true,
  },
  devServer: {
    hot: true,
    port: 8081,
    client: {
      overlay: true,
      progress: true,
      reconnect: true,
    },
  },
};

module.exports = baseConfig;
