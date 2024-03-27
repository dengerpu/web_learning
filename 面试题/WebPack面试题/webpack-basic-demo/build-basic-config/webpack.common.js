const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {srcPath, distPath} = require("./paths");

module.exports = {
  // 单入口配置
  // entry: path.join(srcPath,  'index.js'),
  // 多入口配置
  entry: {
    index: path.join(srcPath,  'index.js'),
    other: path.join(srcPath,  'other.js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: srcPath,
        exclude: /node_modules/
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
      // 自定义loader解析txt文件
      {
        test: /\.txt$/,
        use: './loader/uppercase-loader.js'
      }
    ]
  },
  plugins: [
    // 单入口配置
    // new HtmlWebpackPlugin({
    //   template: path.join(srcPath, 'index.html'),
    //   filename: 'index.html'
    // })

    // 多入口配置
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'index.html'),
      filename: 'index.html',
      // chunks 表示该页面要引用哪些 chunk （即上面的 index 和 other），默认全部引用
      chunks: ['index', 'vendor', 'common']
    }),
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'other.html'),
      filename: 'other.html',
      chunks: ['other', 'vendor', 'common']
    })
  ]
}