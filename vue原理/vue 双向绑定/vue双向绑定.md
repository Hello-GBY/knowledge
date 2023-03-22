1. Observe: vue 中的对象 在初始化的时候 传递给observe 对象（进行数据的监听）
2. Watcher: watcher对象 将模板 结合 watcher 生成watcher实例，(watcher 创建的时候 将当前对象 存储到Dep.target 然后调用取值 触发 对象的get事件)（Dep.sub(Dep.target) ）
3. Dep：Watcher 和 Observe 之间的纽带，每一个 Observe 都有一个dep实例，用来专门存储 watcher

当属性变化，会执行Object.definedPrototype的 set 会执行 Dep.notify()
这个方法会遍历订阅者watcher列表向其发送消息  watcher 会执行 run 方法进行视图的改变

模板中的指令 和 数据绑定 都会生成 watcher 实例
 
