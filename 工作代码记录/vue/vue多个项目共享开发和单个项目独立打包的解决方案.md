由于在实际项目中有几个项目高度相似，想法是通过一个vue项目 来打包、启动不同的项目，这样便于管理，避免项目的频繁切换

## 如图创建文件目录
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6d8a9d654aec4dfe8d71e1c375a95992~tplv-k3u1fbpfcp-watermark.image?)

## 以项目A(deploy) 为例

将根路径的项目结构放到单独的项目中

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/90e0792a091d4d33831856d492c260e2~tplv-k3u1fbpfcp-watermark.image?)

## 创建两个文件

`projects.js`, `vue.config.js`

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3284e88809c44c7a8635806b61476c2c~tplv-k3u1fbpfcp-watermark.image?)


```js
// projects.js
const config = {
  // 可自定义更改
  dep: {
    pages: {
      index: {
        // 目录路径正确即可
        entry: "src/apps/deploy/main.js",
        // template: "src/apps/deploy/index.html",
        filename: "index.html",
      },
    },
    outputDir: "dist/dep/",
  },
  dev: {
    pages: {
      index: {
        entry: "src/apps/develop/main.js",
        // template: "src/apps/deploy/index.html",
        filename: "index.html",
      },
    },
    outputDir: "dist/dev/",
  },
};

module.exports = config;

```


```js
// vue.config.js
const config = require("./projects.js");
let projectName = process.env.PROJECT_NAME;
module.exports = {
  ...config[projectName],
};
```

## 配置package.json
```
    "build:dep": "cross-env PROJECT_NAME=dep vue-cli-service build",
    "serve:dep": "cross-env PROJECT_NAME=dep vue-cli-service serve --open",
    "build:dev": "cross-env PROJECT_NAME=dev vue-cli-service build",
    "serve:dev": "cross-env PROJECT_NAME=dev vue-cli-service serve --open"
```
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0c29e3d87dca43b88df60a507dd21bb2~tplv-k3u1fbpfcp-watermark.image?)

## 全局安装 cross-env
```
npm i cross-env
```

## 运行、打包
```
npm run serve:dev
npm run build:dev
```
