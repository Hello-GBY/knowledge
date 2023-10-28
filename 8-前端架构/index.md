# 前端架构设计指南

## 选型

### service worker 进行整站的缓存

- workerbox 专门将离线数据都搞定

### 页面中多 CDN 的作用是什么

### PWA

### AMP 国内用的不多

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
    微前端  联邦模块

5. 预先渲染
    - Prerender
    - 无头浏览器
        通过命令把网站跑一遍  a/b -> a/b/html

### 部署项目

(不管了 SPA)

1. nginx
2. CDN节点

(MPA + SPA) BFF

3. 机器上
    - ssh
    - linux 基本命令
    - QPS 
         压测 wrk

   EC2 ECS

   BFF 接口聚合
        node 来支援
        tRPC
        GraphQL

   SFF
      cloudflare
      JS 冷气启动问题
      AWS

4. CI /CD (持续构建)
    jenkins
    travis ci

5. 前端架构支持

    1. npm 私仓
        
    2. 组件库 二封
        痛点
         html 库变化了 （封装组件库 要找一些 样式不经常变化的）
    
    3. cli  二封
        - 接口转成ts
        - quicktype.io
        - 功能提效
            
        - 团队规范 
            - 代码重复率检查
            - 质量检查
            - 单元测试 基于UI图的测试 backtstop 基于UI的测试
                     基于页面功能的测试    f2etest
                                        jest
6. 性能监控平台
    AI相关的
        guees.js

    SDK

    接口数据监控，错误的监控

7. 工程上
    webpack
            SWC
            turbo
    包管理工具
            npm
            yarn
               经典版  平铺
               现代版

            pnpm （硬链）存放在系统某个文件夹
                    第二次构建项目报错
            
    最后的部署
            AWS  Amplify
            Cloudflare  Pages


8. 前端框架选型
    state css 20: https://2023.stateofcss.com/
    Best of JS :
    <!-- osawards: https://osawards.com/ -->
    状态机：


原则：
    国内没人讨论，热度很高，衡量团队能力，需要探索，
    核心：解决了什么问题 给团队带来了什么问题，推动的动力是什么？



