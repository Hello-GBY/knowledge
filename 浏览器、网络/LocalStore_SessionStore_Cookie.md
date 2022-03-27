# 浏览器存储方式 LocalStorage;SessionStorage;Cookie


# LocalStorage 存储方式

> 是Html5存储方式，存储再客户端不参与服务端的通信。

## 存储大小
大小一般是5MB，Chrome是10MB。

## 生命周期
页签关闭、浏览器关闭、刷新时数据不会清除，除非手动清除。
## 作用
- 常用来记录一些不敏感的信息。
## 使用方式
```js
localStorage.setItem('key', 'gby') // 设置
localStorage.getItem('key') // 获取
localStorage.removeItem("key"); // 删除
localStorage.clear() // 清空
```

# SessionStorage 存储方式
> 和localStorage所有性质一样，唯以不同是该方式有会话时长。

## 生命周期
- 打开多个同样的Url的Tab页面，都会创建自己的session
- 关闭对应浏览器标签或窗口，会清除对应的 sessionStorage。 

## 作用
- 常用来记录一些不敏感的信息
## 代码
```js
sessionStorage.setItem('name', 'gby') // 设置
sessionStorage.getItem('name') // 获取
sessionStorage.clear() // 删除
```

# Cookie 存储方式
> 它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。

## 生命周期
- 会话期 Cookie ：浏览器关闭之后它会被自动删除
- 持久性 Cookie 的生命周期取决于过期时间（Expires）或有效期（Max-Age）指定的一段时间

## 作用
- 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）
- 个性化设置（如用户自定义设置、主题等）
- 浏览器行为跟踪（如跟踪分析用户行为等）
  
## 代码
```js
document.cookie="username=John Doe"; // 设置
document.cookie // 获取
// 删除cookie 只需要设置 expires 参数为以前的时间即可，
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";

```
