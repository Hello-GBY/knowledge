# 1. 组件传值
```js
父子组件 
兄弟组件
祖父组件
无关联组件

常规的有8种
1. props this.$emit
2. this.$parent this.$childern
3. ref
4. eventBus
5. Provide inject
6. Vuex
7. attr listrens
8. 
```
# 2. vue生命周期
```js
beforeCreate() 实例初始化之前
create() data初始化之后

beforeMounted() dom挂载之前
Mounted() dom挂载之后

beforeUpdate() 数据更新之前
update() 数据更新之后

beforeDestroy 组件卸载之前
destroy组件卸载之后

active
deactivated
errorCaptured
```

思考： 双向绑定 和 响应式原理 不同的地方在哪里？
响应式单项数据流
双向绑定是在响应式的前提上 对 input标签 添加监听事件 @change 事件 接受数据的改变 进而改变数据

1. 响应式
2. 双向绑定原理
