/**
 * 事件发布 订阅
 */

// 收集 订阅 / 发布
class Dep () {
  constructor () {
    this.subs = []
  }

  addSub(watcher){
    this.subs.push(watcher)
  }
  
  // 发布订阅 （重新赋值的时候 重新渲染视图）
  notify() {
    this.subs.forEach(element => {
      element.
    });
  }

}

// 订阅者类
class Watcher {
  constructor(cb) {
    this.cb = cb
  }
  // 执行订阅者事件 （修改dom元素）
  update() {
    this.cb()
  }
}



// 订阅者dom元素
