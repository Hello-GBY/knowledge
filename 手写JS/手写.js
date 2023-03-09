// 1 compose
// 题目描述:实现一个 compose 函数
// 用法如下:
function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}

// 第一种解法
var compose = function () {
  if (!arguments.length) return (v) => v;
  if (arguments.length == 1) return (v) => arguments[0](v);
  let args = [...arguments];

  let i = 0;
  let fun = function (v) {
    if (i >= args.length) {
      i = 0;
      return v;
    }

    v = args[i](v);
    i++;
    return fun(v);
  };

  return fun;
};
// 第二种：解法
var compose = function () {
  if (!arguments.length) return (v) => v;
  if (arguments.length == 1) return (v) => arguments[0](v);
  let args = [...arguments];

  return function (v) {
    return args.reduce((pre, cur) => {
      console.log("cur: ", cur);
      return cur(pre);
    }, v);
  };
};

// 2 settimeout 模拟实现 setinterval(带清除定时器的版本)
//  题目描述:setinterval 用来实现循环定时调用 可能会存在一定的问题 能用 settimeout 解决吗
function MySetInterval(cb, time) {
  let _timer;
  let fun = function () {
    _timer = setTimeout(() => {
      cb();
      fun();
    }, time);
    return _timer;
  };
  return () => _timer;
}

function myClearInterval(timer) {
  clearTimeout(timer);
}

// 3. 发布订阅模式
// 题目描述:实现一个发布订阅模式拥有 on emit once off 方法

class Event {
  constructor() {
    this.eventList = {};
  }
  on(type, fn) {
    if (!fn) return;
    if (!this.eventList[type]) this.eventList[type] = [];

    this.eventList[type].push(fn);
  }
  emit(type, ...args) {
    if (!type) return;
    this.eventList[type] && this.eventList[type].forEach((fn) => fn(...args));
  }
  once(type, fn) {
    let that = this;
    let _fn = function () {
      try {
        fn();
      } catch (error) {
        console.log("error: ", error);
      }
      that.off(type, _fn);
    };
    this.on(type, _fn);
  }
  off(type, fn) {
    if (!type) return;
    if (!this.eventList[type]) return;
    if (!fn) {
      this.eventList[type].length = 0;
      return;
    }
    // 第一种方法
    // findIndex + splice
    // let index = this.eventList[type].findIndex((f) => fn = f)
    // if(index == -1) return
    // this.eventList[type].splice(index, index+1)
    // 第二种方法
    this.eventList[type] = this.eventList[type].filter((func) => func !== fn);
  }
}

// 离线的触发

// 4. 手写 promise.all 和 race
function myAll(fns) {
  let resAll = [];
  let j = 0;

  return new Promise((resolve, rej) => {
    fns.forEach((fn, i) => {
      Promise.resolve(fn).then((res) => {
        ++j;
        resAll[i] = res;
        if (j == promiseLen) resolve(resAll);
      });
    });
  });
}

function myRace(fns) {
  return new Promise((resolve, reject) => {
    for (const fn of fns) {
      Promise.resolve(fn).then(
        (res) => {
          resolve(res);
        },
        (rej) => {
          reject(rej);
        }
      );
    }
  });
}
// 5. 手写-实现一个寄生组合继承

// 1. 原型链继承
function Parent() {
  this.name = "123";
  this.play = [1, 2, 3];
}

Parent.prototype.getName = function () {
  console.log("获取name");
  return this.name;
};

Child.prototype = new Parent();

function Child() {
  this.type = "test";
}

let a1 = new Child();
let a2 = new Child();

// 2. 构造函数继承
function Child() {
  Parent.call(this); //只能拥有this 上定义的 不能继承原型上的
  this.type = "test";
}
let c1 = new Child();

// 3. 组合继承
function Child() {
  Parent.call(this);
  this.type = "test2";
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;
// 缺点是执行了两次

// 4. 寄生组合继承
// 就是将组合上的原型继承 更改为Object.create()
// 能减少一次请求
function Child() {
  Parent.call(this);
  this.type = "test2";
}
function clone() {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

// 主要是 使用没用 Object.create( 来划分

// 4 数组去重
function uniqueArr(arr) {
  return [...new Set(arr)];
}
function uniqueArr1(arr) {
  let arr2 = [];

  arr.forEach((i) => {
    if (!arr2.includes(i)) {
      arr2.push(i);
    }
  });
  return arr2;
}

// ** 7 实现有并行限制的 Promise 调度器
// 第一种解法
var list = [];
var i = 0;

function Scheduler(fn) {
  if (i >= 2) {
    list.push(fn);
    return;
  } else {
    ++i;
    new Promise((resolve, reject) => {
      fn(resolve);
    }).then((res) => {
      i--;
      if (list.length) {
        let fn = list.shift();
        Scheduler(fn);
      }
    });
  }
}

function addTask(time, data) {
  let fn = function (resolve) {
    setTimeout(() => {
      console.log(data);
      resolve(data);
    }, time);
  };
  Scheduler(fn);
}

// 优化 将全局变量包裹在 立即执行函数中
var SchedulerInstance = (function () {
    var list = [];
    var i = 0;
    return function (fn) {
        if (i > =2) {
            list.push(fn);
            return;
        } else {
            ++i;
            new Promise((resolve, reject) => {
                fn(resolve);
            }).then((res) => {
                i--;
                if (list.length) {
                    let fn = list.shift();
                    SchedulerInstance(fn);
                }
            });
        }
    }
})()
function addScheduler(time, data) {
    let fn = function (resolve) {
        setTimeout(() => {
          console.log(data);
          resolve(data);
        }, time);
      };
      SchedulerInstance(fn);
}
function addTask(time, data) {
  addScheduler(time, data)
}

// 第三种解法
// class Scheduler{
//     constructor(limit) {
//         this.limit = limit
//         this.queue =  []
//         this.counter = 0
//     },
//     taskStart() {
//       for (let index = 0; index < this.limit; index++) {
//         this.request()
//       }
//     }
//     add(time, order)() {
//         let promiseInstance =  () => {
//             new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                     console.log(order)
//                     resolve(order)
//                 }, time)
//             })
//         }
//         this.queue.push(promiseInstance)
//     }
//     request() {
//        if(!(this.queue && this.queue.length && this.limit > this.queue.length)) {
//         return
//        }
//        this.counter++;
//        this.queue.shift()().then(() => {
//         this.counter--;
//         this.request()
//        })
//     }
// }
// const scheduler = new Scheduler(2);

// function addTask(time, data) {
//   scheduler.add(time,data)
// }
// addTask(1000, "1");
// addTask(500, "2");
// addTask(300, "3");
// addTask(400, "4");
// scheduler.taskStart();

class Scheduler{
  constructor(limit) {
    this.limit = limit;
    this.queue = [];
    this.counter = 0;
  }
  add(timer, data){

    let promiseInstance  = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(data)
          resolve(data)
        }, time)
      })
    }
    this.queue.push(promiseInstance)
  }
  request() {
    if(!(this.queue && this.queue.length && this.counter <= this.limit)) return
    this.counter++
    this.queue.shift()().then(res => {
      this.counter--
      this.request()
    })
  }

  startTask() {
    for (let index = 0; index < this.limit; index++) {
        this.request()
    }
  }
}

function addTask(time, data) {
  scheduler.add(time,data)
}
addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
scheduler.taskStart();


// 8 new 操作符
function myNew(fn, ...args) {
  // 继承prototype
  let obj = Object.assign({}, fn.prototype);
  // 赋值this
  let res = fn.call(obj, ...args)
  if(typeof res == 'object' || typeof res == 'function') return res
  return obj
}

// 9. 手写 call apply ** bind 实现
function myCall(content, ...args){
    if(!content) content = window
    // 怎么知道 fn
    let fn = Symbol('fn')
    content[fn] = this
    return content[fn](...args)
}
Function.prototype.myCall = myCall

// function a() {}
// a.myCall({}, 1,2,3,4)
function myApply(content, args){
  if(!content) content = window;

  let fn = Symbol("fn")
  content[fn] = this
  return content[fn](...args)
}
// ** bind 实现
function myBind(content, args) {
  if(!content) content = window

  let fn = Symbol("fn");
  let _this = this

  content[fn] = this;
  // 判断是不是通过new调用
  let result = function(...args2) {
    if(_this instanceof this){
      this[fn] = _this
      this[fn](...[...args, ...args2])
    }else {
      content[fn](...[...args, ...args2])
    }
  }
  result.prototype = Object.assign(this.prototype)
  return result
}


// 手写深拷贝
// 1. 注意要判断数组 2. 用 for in 就行
function deepClone(obj) {
    // 校验
    if(!obj || typeof obj !== 'object') return obj

    let temp = Array.isArray(obj) ? [] : {}
    
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            temp[key] = deepClone(element)
        }
    }
    return temp
}

// 优化 用 map 判断是否为循环引用  
function deepClone(obj, map = new WeakMap()) {
    // 校验
    if(!obj || typeof obj !== 'object') return obj
    if(map.has(obj)) {
        console.log('map.get(obj): ', map.get(obj));
        return map.get(obj)
    }
    let temp = Array.isArray(obj) ? [] : {}
    map.set(obj, temp)
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            temp[key] = deepClone(element, map)
        }
    }
    return temp
}
var a = {
    asd: 456
}
a.value = a
deepClone(a)

// 实现 instanceof
function myInstanceof(left, right){
  if(!left) return false
  let proto_ = left.__proto__
  while(true){
    if(proto_ == null) return false
    if(proto_ == right.prototype) return true
    proto_ = proto_.__proto__
  }
}

// 12 柯里化
//  fn.length 可一获取参数的位数
function curry(fn, ...args1) {
  let args = fn.length
  let argsAll = args1
  
  let res = function (...args2) {
    argsAll = argsAll.concat(args2)
    if(argsAll.length == args) {
      return fn(...argsAll)
    } else {
      return res
    }
  }
  return res
}

function sum(a, b) {
  return a + b;
}
let curriedSum = curry(sum);

alert(curriedSum(1)(2)); // 3



// 冒泡排序--时间复杂度 n^2
// 相邻的交换 将最大的挪动到最后了
function bubbleSort(arr) {
    let len = arr.length
    // 外层来确定完成了几项
    for (let i = 0; i < len; i++) {
      // 内层来转换
      for (let j = 0; j < len - i; j++) {
        if(arr[j] > arr[j+1]) {
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
      }
    }
    return arr
}


// 选择排序--时间复杂度 n^2
// 每次找出最小的值
function selectSort(arr) {
  let len = arr.length
  let minIndex
  for (let i = 0; i < len; i++) {
      minIndex = i
      for (let j = i; j < len; j++) {
          if(arr[minIndex] > arr[j]){
              minIndex = j
          }
      }
      if(minIndex != i) {
          // 将最小值放到最前面
          [arr[i], arr[minIndex]] =[arr[minIndex],arr[i]] 
      }

  }
  return arr
}

// 插入排序--时间复杂度 n^2
function insertSort(arr){
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    const element = arr[i];
    let minIndex = i;
    for (let j = i ; j>=0; j--) {
      if(element < arr[j]){
        minIndex--
        arr[j+1] = arr[j]
      }
    }
    arr[minIndex] = element
  }
  return arr
}

// 数组往后挪动 挪动到数据大于下一个值 就放下
function insertSort2(arr){
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let j = i
    while (j > 0 && element < arr[j]) {
      arr[j] = arr[j-1]
      --j
    }
    arr[j] = element
  }
  return arr
}
