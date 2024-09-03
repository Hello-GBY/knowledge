# npm run XXX 之后执行了什么


# package.json 回个


# npm install 之后都会发生什么

测试


# 权限控制
## 登录权限控制
```js
export const routes = [{
    path:"/myCenter", // 个人中心
    name:"MyCenter",
    component: MyCenter, 
    meta:{
    need_login:true //需要登录
    }
}]
```
```js
router.beforeEach((to, from, next) => {
  const { need_login = false } = to.meta;
```
## 页面权限控制
静态路由，动态路由
```js

```



# BFF
用node 进行一层处理 
一般用 Rpc 协议传输













