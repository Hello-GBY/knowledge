# 前端架构设计指南
## 选型



### 
service worker 进行整站的缓存
workerbox 专门将离线数据都搞定


页面中 多 CDN? 的作用是什么


PWA

AMP 国内用的不多


### 选型

### 技术架构
1. 是否需要支持纯离线站点
    - service workers
    - workerbox 直接缓存站点 分分钟顶上
    - webpack-workerbox 自动帮你分析资源

2. SPA
    - CRA (react)
    - VUE-CLI ()
    - 配置一个自己的webapck cil


3. MPA
    - koa
    - nest.js

4. MPA + SPA (刷新的时候是多页、切页的时候是单页)
    能判断是怎么请求的
        - 减少资源加载

5. 预先渲染
    Prerender
    无头浏览器
        通过命令把网站跑一遍  a/b -> a/b/html
    
### 部署项目

(不管了 SPA)
1. nginx
2. CDN节点

(MPA + SPA)
3. 机器上
    - ssh
    - linux 基本命令

### 前端架构支持
    npm 私仓
        
    组件库 二封
        痛点
         html 库变化了
            
         