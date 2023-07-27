# 1. vue2 和 vue3 的不同点

### 大项

1. 性能提升了 （为什么）
2. 打包的大小减小了 41% （为什么）
3. 增加了 compositions api 实现逻辑模块化和复用性
4. 增加了新特性，如 Teleport 组件，全局 api 的修改和优化
5. 生命周期不同
   （在 vue2 中是直接在页面中写入生命周期，vue3 是需要动态引入，这就是为什么 vue3 打包体积惠小平）
6. 脚手架生成的默认结构不一样了
7.

### 小项

1.

1. vm 实例 属性值不一样 vue3 少了好多
   原因 因为引入 hook 就是动态引用几个 不需要全部挂载在 根实例上了 比如 ref router

1. 模板上的根 vue3 可以多个根实例同时存在

1. setup 函数
   setup 组件 动态传入 两个参数（props,context）

1. 函数中没有 this

1. 当 setUp 内部有异步的使用 可以直接使用 await 不需要 在函数前面加上 async

1. 动态绑定元素用的是 ref 和 reactive

ref 动态设置数据原理就是 object.defineProperty()
reactive 动态设置的就是 proxy

7. 生命周期不同

8. computed 不在是一个对象 而是一个函数；watch 不在是一个对象而是一个函数

9.

.map 文件是干嘛的

# watch 和 computed 区别？

先说答案： 1.现象是什么（用发有什么不同）？
watch 是监听对象改变时的回调函数，函数有两个参数 新值和旧值。分为普通监听和深度监听。

computed 是计算属性，用当前值来产生新的值，其中内部不能异步执行。其中定义的数据不能和 data 中的数据冲突。

2.底层原理有什么不一样？

1. 会遍历 compute 对象的键值 ， 然后判断是不是函数 如果是函数就拿到这个函数
   否则 就使用这个 对象的.get 作为处理函数
2. 然后会 判断键值 是不是和 data 或者 props 同名了
3. 之后会使用原创建 响应式数据的方法

3.什么情况下使用？
计算属性在大多的情况更合适
watch 是当需要在数据变化时执行异步或开销较大的操作时

# vue2 的响应式原理

## 视频 简单易懂

https://www.bilibili.com/video/BV1Ph41117hq/?p=1&share_medium=android&share_plat=android&share_source=COPY&share_tag=s_i&timestamp=1625124020&unique_k=uREcvY&vd_source=ddef9fd7630bde2b6a6618c696f66d5a

key 相同 只会更改老节点的 text 或者 children 属性

头头对比
尾尾对比
头尾对比
尾头对比
顺序对比

假设： 头尾对比成功 就把头部的节点移动到尾部
