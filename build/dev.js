const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const baseConfig = require('./webpack.base.js');
const webpack = require('webpack');
const merge = require('webpack-merge');
const WebpackDevServer = require('webpack-dev-server');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const path = require('path');
const attr = (str) => chalk.rgb(152, 195, 121)(str);
const attrValue = (str) => chalk.rgb(97, 175, 239)(str);
let isFirst = true;
function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
const devConfig  = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    index: [ resolve('src/index.ts'), resolve('dev/index.ts') ]
  },
  output: {
    filename: 'js/[name].js',
    publicPath: '/',
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: 'dev/index.html'
    }),
    new ProgressBarPlugin({
      renderThrottle: 1,
      format: `<${attr('progress=')}${attrValue(':percent')}  ${attr('time=')}${attrValue(
        ':elapseds'
      )}  ${attr('status=')}${attrValue(':msg')} />`,
      callback: async function() {
        if (isFirst === false) return;
        isFirst = false;
        let port = baseConfig.devServer.port;
        let url = 'http://localhost:' + port;
        setTimeout(() => {
          console.log(`\nStarting server on ${url}  ||  http://${require('ip').address()}:${port}`);
        }, 1000);
      }
    })
  ],
  optimization: {
    moduleIds: 'named'
  }
};

const webpackConfig = merge({}, baseConfig, devConfig);
const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(baseConfig.devServer, compiler);

const runServer = async () => {
  console.log('Starting server...');
  await server.start();
};

runServer();
