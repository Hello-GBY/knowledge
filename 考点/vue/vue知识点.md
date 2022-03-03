# 1. vue2 和 vue3 的不同点

### 大项
1. 性能提升了
2. 打包的大小减小了41%
3. 增加了compositions api 实现逻辑模块化和复用性


### 小项
1. 


1. vm 实例 属性值不一样 vue3少了好多
原因 因为引入 hook 就是动态引用几个 不需要全部挂载在 根实例上了 比如 ref router

2. 模板上的根  vue3可以多个根实例同时存在

3. setup函数
setup 组件 动态传入 两个参数（props,context）

4. 函数中没有this

5. 当setUp内部有异步的使用 可以直接使用 await 不需要 在函数前面加上 async

6. 动态绑定元素用的是 ref 和 reactive

ref动态设置数据原理就是 object.defineProperty()
reactive 动态设置的就是 proxy

7. 生命周期不同

8. computed 不在是一个对象 而是一个函数；watch 不在是一个对象而是一个函数

9. 
