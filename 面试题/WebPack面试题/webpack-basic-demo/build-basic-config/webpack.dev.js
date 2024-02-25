const path = require('path')
const webpack = require('webpack')
const webpackCommonConf = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const { srcPath, distPath } = require('./paths')

module.exports = merge(webpackCommonConf, {
  mode: 'development',
  devServer: {
    historyApiFallback: true, // 解决404问题
    // contentBase: distPath, // 根目录，webpack5会报错
    // open: true, // 自动打开浏览器 报错：SyntaxError: The requested module 'node:fs/promises' does not provide an export named 'constants'
    compress: true, // 压缩
    hot: true, // 热更新
    port: 8080, // 设置启动时监听的端口
    // 设置代理 —— 如果有需要的话！
    // proxy: {
    //   // 将本地 /api/xxx 代理到 localhost:3000/api/xxx
    //   // '/api': 'http://localhost:3000',

    //   // 将本地 /api2/xxx 代理到 localhost:3000/xxx
    //   '/api2': {
    //     target: 'http://localhost:3000',
    //     pathRewrite: {
    //       '/api2': ''
    //     }
    //   }
    // }
  },
  plugins: [
    new webpack.DefinePlugin({
      // window.ENV = 'production'
      ENV: JSON.stringify('development')
    })
  ]
})