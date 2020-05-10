const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseConfig = require('./webpack.base.js');
const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const chalk = require('chalk');
const entry = require('./getEntries');
function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

const buildConfig  = {
  mode: 'production',
  entry,
  output: {
    filename: '[name].js',
    path: resolve('dist'),
    library: '[name]',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};

const webpackConfig = merge({}, baseConfig, buildConfig);
webpack(webpackConfig, (err, stats) => {
  err && console.log(err);
  if (stats) {
    const info = stats.toJson('errors-warnings');
    if (stats.hasWarnings()) {
      process.stdout.write(chalk.rgb(206, 182, 94)(info.warnings) + '\n\n');
    }
    if (stats.hasErrors()) {
      process.stdout.write(chalk.rgb(233, 28, 65)(info.errors) + '\n\n');
      process.exit(1);
    }
  }
});
