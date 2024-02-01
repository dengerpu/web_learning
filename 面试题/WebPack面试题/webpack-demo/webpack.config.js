const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index.js"), //入口文件
  output: {
    filename: "bundle.js", //打包后的文件名
    path: path.join(__dirname, "dist") // 打包后的目录
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: path.join(__dirname, "src"),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"), // 模板文件
      filename: "index.html" // 生成的HTML文件名
    })
  ],
  devServer: {
    port: 3000, // 设置启动时监听的端口
    open: true, // 自动打开浏览器
    static: {
      directory: path.join(__dirname, "dist")
    }
    // contentBase: path.join(__dirname, "dist") // 设置启动时加载的页面地址
  }
}