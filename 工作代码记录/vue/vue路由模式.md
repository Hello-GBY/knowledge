# 使用history模式
1. 当使用history模式的时候 nginx 代理 出现问题 路径访问不到

这两种模式


1. 都是为了达到在更改视图的时候不想后端发送请求
2. 形式上 hash 带 # 号 , history 不带路由
3. 在nginx 配置二级路由的时候（或者访问二级路由的时候）在刷新地址栏之后 对于 history 会资源找不到页面没有结果，hash 则不会
   此时需要在nginx 进行配置 ，或者服务端 进行一个转发

4. 在hash 模式下， 所有页面切换都是客户端进行的操作，因此对页面的拦截更加灵活；每次url 改变都不算是一次 http请求， 不利于SEO。
5. 在 history 下，重新刷新会新发起该地址的请求，必须服务端配置好地址。 当url没变化的时候刷新 也会进入到历史记录中 回退什么的都好使。
6. history 是 html5 的新特性， hash是一直都有


适用场景：

hash，原本用来结合锚点控制页面视窗的位置

history 适合对外链接展示

hash 原理：
```js

window.onhashchange = function () {
    // 更新dom
}
// 触发哈希
location.href = 'https://www.baidu.com/#/aa';
location.href = 'https://www.baidu.com/#/aa/qwe';
```

history 原理：
```js

```
https://www.cnblogs.com/tugenhua0707/p/10859214.html
https://zhuanlan.zhihu.com/p/337073166
https://juejin.cn/post/6844904151206330375#heading-3

# 动态路由传参
   1. params 需要 name 和路由配置
   ```js
    // 路由
    {
        path: "/test/:id/:name",
        name: "test",
        component: Home,
    }

    this.router.push({
        name: '',
        params: {

        }
    })

    // 地址  http://localhost:8080/test/50
   ```
   1. query 是通过 path
   ```js
    this.router.push({
        path: '/test',
        query: {
            id： 50
        }
    })
    // 地址 http://localhost:8080/test?id=50
   ```
