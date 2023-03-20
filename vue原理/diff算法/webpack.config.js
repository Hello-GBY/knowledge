const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    // 虚拟打包路径； 文件不会真的生成
    publicPath: "dist",
    filename: "bundle.js",
  },
  devServer: {
    // 端口号
    port: 8080,
    // 静态资源文件
    contentBase: "www",
  },
};
