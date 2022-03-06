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

// 数据劫持
let obj = {}
Object.defineProperty(obj,"name", {
  configurable: true,
  enumerable: true,
  set(val) {
    console.log('赋值了obj: ', val);

  },
  get() {
    return value
  }
})

/**
 * 知识点：
 * 订阅者相当于dom元素
 * /

