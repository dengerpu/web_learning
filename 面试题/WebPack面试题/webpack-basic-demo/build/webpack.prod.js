const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 抽离css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 压缩css
const TerserJSPlugin = require('terser-webpack-plugin')
// webpack5不支持
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const webpackCommonConf = require('./webpack.common')
// 多进程打包
const HappyPack = require('happypack')
const { merge } = require('webpack-merge')
const { srcPath, distPath } = require('./paths')

module.exports = merge(webpackCommonConf, {
  mode: 'production',
  output: {
    // name 即多入口时 entry 的 key
    filename: '[name].[contenthash:8].js',
    path: distPath,
    // publicPath: 'http://cdn.abc.com'  // 修改所有静态文件 url 的前缀（如 cdn 域名），这里暂时用不到
  },
  module: {
    // 独完整的 `react.min.js` 文件就没有采用模块化
    // 忽略对 `react.min.js` 文件的递归解析处理
    noParse: [/react\.min\.js$/],
    rules: [
      // {
      //   test: /\.js$/,
      //   use: ['babel-loader?cacheDirectory'], // 开启缓存
      //   include: srcPath, // 明确范围
      //   // 排除范围，include 和 exclude 两者选一个即可
      //   // exclude: /node_modules/
      // },
      //js
      {
        test: /\.js$/,
        // 把对 .js 文件的处理转交给 id 为 babel 的 HappyPack 实例
        use: ['happypack/loader?id=babel'],
        include: srcPath,
        // exclude: /node_modules/
      }, 
      // 图片 - 考虑 base64 编码的情况
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: {
          loader: 'url-loader',
          options: {
            // 小于 5kb 的图片用 base64 格式产出
            // 否则，依然延用 file-loader 的形式，产出 url 格式
            limit: 5 * 1024,
            // 打包到 img 目录下
            outputPath: '/img/',
            // 设置图片的 cdn 地址（也可以统一在外面的 output 中设置，那将作用于所有静态资源）
            // publicPath: 'http://cdn.abc.com'
          }
        }
      },
      // 抽离css
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // 注意这里不再使用style-loader
          'css-loader',
          'postcss-loader'
        ]
      },
      // 抽离less
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), // 会默认清空 output.path 文件夹
    new webpack.DefinePlugin({
      // window.ENV = 'production'
      ENV: JSON.stringify('production')
    }),
    // 抽离css文件
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
    }),
    // 忽略 moment 下的 /locale 目录
    new webpack.IgnorePlugin({
      resourceRegExp: /\.\/locale/,
      contextRegExp:  /moment/
    }),
    // happyPack 开启多进程打包
    new HappyPack({
      // 用唯一的标识符 id 来代表当前的 HappyPack 是用来处理一类特定的文件
      id: 'babel',
      // 如何处理 .js 文件，用法和 Loader 配置中一样
      loaders: ['babel-loader?cacheDirectory'],
    })
  ],
  optimization: {
    // 压缩css
    minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin(),],
    // 分割代码块
    splitChunks: {
      chunks: 'all',
      /**
       * initial 入口chunk，对于异步导入的文件不处理
          async 异步chunk，只对异步导入的文件处理
          all 全部chunk
      */
      // 缓存分组
      cacheGroups: {
        // 第三方模块
        vendor: {
          name: 'vendor', // chunk 名称
          priority: 1, // 权限更高，优先抽离，重要！！！
          test: /node_modules/,
          minSize: 0,  // 大小限制
          minChunks: 1  // 最少复用过几次
        },
        // 公共的模块
        common: {
          name: 'common', // chunk 名称
          priority: 0, // 优先级
          minSize: 0,  // 公共模块的大小限制
          minChunks: 2  // 公共模块最少复用过几次
        }
      }
    }
  }
})