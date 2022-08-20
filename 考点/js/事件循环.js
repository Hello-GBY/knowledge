// 几个特点
// 先执行 宏任务 再 微任务
// 对于Promise .then的才算微任务

// await 后面的方法会立即执行 之后的代码 会沦为下次的新的微任务
// 每次执行的时候 都有清空当前的微任务队列  如果此时有新加入的微任务队列 也会执行 直到队列为空
// 微任务：
promise().then await MutationObserver process.nextTick 
// 宏任务 
setTimeout setInterval js整体代码 postMessage I/O操作 UI事件
// 
