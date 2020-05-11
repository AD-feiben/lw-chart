// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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
  plugins: [
    // new CleanWebpackPlugin()
  ]
};

const umdWebpackConfig = merge({}, baseConfig, buildConfig, {
  entry,
  output: {
    filename: '[name].js',
    path: resolve('dist'),
    library: '[name]',
    libraryTarget: 'umd',
    libraryExport: 'default'
  }
});

const commonWebpackConfig = merge({}, baseConfig, buildConfig, {
  entry: {
    index: resolve('src/index.ts')
  },
  output: {
    filename: 'index.common.js',
    path: resolve('dist'),
    libraryTarget: 'commonjs',
  }
});

const webpackConfig = [umdWebpackConfig, commonWebpackConfig];

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
