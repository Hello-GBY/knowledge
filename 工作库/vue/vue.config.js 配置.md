## 打包配置
```js
 pages: {
  index: {
    entry: "src/products/offline-deploy/main.js", // 入口
    // template: "src/apps/deploy/index.html",
    filename: "index.html",
    title: "XXX // 页签名称
    favicon: path.resolve("src/assets/favicon.ico"), // 图标
  },
},
indexPath: "auth.html", // 打包出来的index.html别名
outputDir: "dist/XXXXX/, // 打包路径
assetsDir: "lib",
```
## 插件配置
```js
configureWebpack: (config) => {
     config.plugins = [.....]
}
```
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b3fa00034a2549b2b4f06fdde0f2d765~tplv-k3u1fbpfcp-watermark.image?)