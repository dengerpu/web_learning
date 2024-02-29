const path = require('path')
const webpack = require('webpack')
const webpackCommonConf = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const { srcPath, distPath } = require('./paths')

module.exports = merge(webpackCommonConf, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory'], // 开启缓存
        include: srcPath, // 明确范围
        // 排除范围，include 和 exclude 两者选一个即可
        // exclude: /node_modules/
      },
      {
        test: /\.css$/,
        // loader 的执行顺序是：从后往前, 从下往上
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      // 直接引入图片 url
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: 'file-loader'
      }
    ]
  },
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