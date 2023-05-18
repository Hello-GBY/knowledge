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
var compose = function() {
  if (!arguments.length) return (v) => v;
  if (arguments.length == 1) return (v) => arguments[0](v);
  let args = [...arguments];

  let i = 0;
  let fun = function(v) {
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
var compose = function() {
  if (!arguments.length) return (v) => v;
  if (arguments.length == 1) return (v) => arguments[0](v);
  let args = [...arguments];

  return function(v) {
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
  let fun = function() {
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
    let _fn = function() {
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

Parent.prototype.getName = function() {
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
  let fn = function(resolve) {
    setTimeout(() => {
      console.log(data);
      resolve(data);
    }, time);
  };
  Scheduler(fn);
}

// 优化 将全局变量包裹在 立即执行函数中
var SchedulerInstance = (function() {
  var list = [];
  var i = 0;
  return function(fn) {
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
          SchedulerInstance(fn);
        }
      });
    }
  };
})();
function addScheduler(time, data) {
  let fn = function(resolve) {
    setTimeout(() => {
      console.log(data);
      resolve(data);
    }, time);
  };
  SchedulerInstance(fn);
}
function addTask(time, data) {
  addScheduler(time, data);
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

class Scheduler {
  constructor(limit) {
    this.limit = limit;
    this.queue = [];
    this.counter = 0;
  }
  add(timer, data) {
    let promiseInstance = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(data);
          resolve(data);
        }, timer);
      });
    };
    this.queue.push(promiseInstance);
  }
  request() {
    if (!(this.queue && this.queue.length && this.counter <= this.limit))
      return;
    this.counter++;
    this.queue
      .shift()()
      .then((res) => {
        this.counter--;
        this.request();
      });
  }

  startTask() {
    for (let index = 0; index < this.limit; index++) {
      this.request();
    }
  }
}

function addTask(time, data) {
  scheduler.add(time, data);
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
  let res = fn.call(obj, ...args);
  if (typeof res == "object" || typeof res == "function") return res;
  return obj;
}

// 9. 手写 call apply ** bind 实现
function myCall(content, ...args) {
  if (!content) content = window;
  // 怎么知道 fn
  let fn = Symbol("fn");
  content[fn] = this;
  return content[fn](...args);
}
Function.prototype.myCall = myCall;

// function a() {}
// a.myCall({}, 1,2,3,4)
function myApply(content, args) {
  if (!content) content = window;

  let fn = Symbol("fn");
  content[fn] = this;
  return content[fn](...args);
}
// ** bind 实现
function myBind(content, args) {
  if (!content) content = window;

  let fn = Symbol("fn");
  let _this = this;

  content[fn] = this;
  // 判断是不是通过new调用
  let result = function(...args2) {
    if (_this instanceof this) {
      this[fn] = _this;
      this[fn](...[...args, ...args2]);
    } else {
      content[fn](...[...args, ...args2]);
    }
  };
  result.prototype = Object.assign(this.prototype);
  return result;
}

// 手写深拷贝
// 1. 注意要判断数组 2. 用 for in 就行
function deepClone(obj) {
  // 校验
  if (!obj || typeof obj !== "object") return obj;

  let temp = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      temp[key] = deepClone(element);
    }
  }
  return temp;
}

// 优化 用 map 判断是否为循环引用
function deepClone(obj, map = new WeakMap()) {
  // 校验
  if (!obj || typeof obj !== "object") return obj;
  if (map.has(obj)) {
    console.log("map.get(obj): ", map.get(obj));
    return map.get(obj);
  }
  let temp = Array.isArray(obj) ? [] : {};
  map.set(obj, temp);
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      temp[key] = deepClone(element, map);
    }
  }
  return temp;
}
var a = {
  asd: 456,
};
a.value = a;
deepClone(a);

// 实现 instanceof
function myInstanceof(left, right) {
  if (!left) return false;
  let proto_ = left.__proto__;
  while (true) {
    if (proto_ == null) return false;
    if (proto_ == right.prototype) return true;
    proto_ = proto_.__proto__;
  }
}

// 12 柯里化
//  fn.length 可一获取参数的位数
function curry(fn, ...args1) {
  let args = fn.length;
  let argsAll = args1;

  let res = function(...args2) {
    argsAll = argsAll.concat(args2);
    if (argsAll.length == args) {
      return fn(...argsAll);
    } else {
      return res;
    }
  };
  return res;
}

function sum(a, b) {
  return a + b;
}
let curriedSum = curry(sum);

alert(curriedSum(1)(2)); // 3

// 冒泡排序--时间复杂度 n^2
// 相邻的交换 将最大的挪动到最后了
function bubbleSort(arr) {
  let len = arr.length;
  // 外层来确定完成了几项
  for (let i = 0; i < len; i++) {
    // 内层来转换
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// 选择排序--时间复杂度 n^2
// 每次找出最小的值
function selectSort(arr) {
  let len = arr.length;
  let minIndex;
  for (let i = 0; i < len; i++) {
    minIndex = i;
    for (let j = i; j < len; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (minIndex != i) {
      // 将最小值放到最前面
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

// 插入排序--时间复杂度 n^2
function insertSort(arr) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    const element = arr[i];
    let minIndex = i;
    for (let j = i; j >= 0; j--) {
      if (element < arr[j]) {
        minIndex--;
        arr[j + 1] = arr[j];
      }
    }
    arr[minIndex] = element;
  }
  return arr;
}

// 数组往后挪动 挪动到数据大于下一个值 就放下
function insertSort2(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let j = i;
    while (j > 0 && element < arr[j]) {
      arr[j] = arr[j - 1];
      --j;
    }
    arr[j] = element;
  }
  return arr;
}

// 快排
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let cur = arr[0];

  // 小于的放在左面  大于的放在右面
  let leftArr = arr.filter((a, i) => a - cur <= 0 && i !== 0);
  let rightArr = arr.filter((a) => a - cur > 0);

  return [...quickSort(leftArr), cur, ...quickSort(rightArr)];
}

// 归并排序
// 用空间换时间
function merge(left, right) {
  let res = [];
  while (i < left.length && i < right.length) {}
}

function mergeSort(arr) {}
// 二分查找
function search(arr, target, start, end) {
  let targetIndex = -1;

  let mid = Math.floor(start + end / 2);

  if (arr[mid] == target) {
    targetIndex = mid;
    return targetIndex;
  }
  if (start > end) return targetIndex;
  if (arr.length <= 1) return targetIndex;

  if (arr[mid] < target) {
    return search(arr, target, mid + 1, end);
  } else {
    return search(arr, target, start, mid - 1);
  }
}

// 防抖
function debounce(fn, delay = 300) {
  //默认300毫秒
  let timer;
  return function() {
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args); // 改变this指向为调用debounce所指的对象
    }, delay);
  };
}

window.addEventListener(
  "scroll",
  debounce(() => {
    console.log(111);
  }, 1000)
);

// 节流
// 设置一个标志
function throttle(fn, delay) {
  let flag = true;
  return () => {
    if (!flag) return;
    flag = false;
    let that = this
    timer = setTimeout(() => {
      fn().apply(that)
      flag = true;
    }, delay);
  };
}

window.addEventListener(
  "scroll",
  throttle(() => {
    console.log(111);
  }, 1000)
);

// 19 实现 LazyMan
// 重点是next 和 settimeout(fn, 0)
function lazyMan(name) {
  let queue = [];
  queue.push({ func: getHookFunc("default"), data: name });
  setTimeout(() => {
    next();
  }, 0);
  function getHookFunc(type, data) {
    let typeInstance = {
      default: function(data, next) {
        console.log("Hi This is : ", data);
        next();
      },
      sleepFirst: function(data, next) {
        console.log("Wake up after ", data);
        setTimeout(() => {
          next();
        }, data);
      },
      sleep: function(data, next) {
        console.log("Wake up after", data);
        setTimeout(() => {
          next();
        }, data);
      },
      eat: function(data, next) {
        console.log("Eat ", data);
        next();
      },
    };
    return typeInstance[type];
  }
  function next() {
    let instance = queue.shift();
    instance && instance.func(instance.data, next);
  }
  let hook = {
    sleep: function(time) {
      queue.push({ func: getHookFunc("sleep"), data: time });
      return hook;
    },
    eat: function(text) {
      queue.push({ func: getHookFunc("eat"), data: text });
      return hook;
    },
    sleepFirst: function(time) {
      queue.unshift({ func: getHookFunc("sleepFirst"), data: time });
      return hook;
    },
  };
  return hook;
}

// 第二种方法
class LazyMan {
  constructor() {
    this.queue = [];
    setTimeout(() => {
      this.next();
    });
  }

  next() {
    let fn = this.queue.shift();
    fn && fn();
  }

  sleep(time) {}

  sleepFirst() {
    11 - 19;
  }
}

// 写版本号排序方法
// 题目描述: 有一组版本号如下 ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']。
// 现在需要对其进行排序，排序的结果为: ['4.3.5','4.3.4.5','2.3.3','0.302.1','0.1.1']

// 思路: 先按照最高版本排序 然后各个版本在二级版本排序 然后在
// 类似于归并算法

function versionSort(arr) {
  arr.sort((a, b) => {
    let i = 0;
    let arr1 = a.split(".");
    let arr2 = b.split(".");

    while (true) {
      const s1 = arr1[i];
      const s2 = arr2[i];

      if (s1 === undefined || s2 === undefined) {
        return arr1.length - arr2.length;
      }

      if (s1 == s2) continue;

      return s2 - s1;
    }
  });

  return arr;
}

// pacth 函数主要是 用来初始化 vnode
// 其次是更新的时候 能 进行新老元素对比
//     在对比过程中 如果节点类型一致的化 调用 pacthVnode
//     如果不一致则删除在新增元素
//          pacthVnode  比较子节点
//             text children

//             主要是 都有children 的时候  进行 updateChildren 更新

//             text 和 children

// LRU算法
// 时间复杂度为O(1) 一定是对象这样存储
class LRUCache {
  constructor(limit) {
    this.lruQueue = new Map();
    this.limit = limit;
  }

  put(key, value) {
    if (this.lruQueue.has(key)) {
      this.lruQueue.delete(key);
      this.lruQueue.set(key, value);
    }

    // 注意
    else if (this.lruQueue.size < this.limit) {
      this.lruQueue.set(key, value);
    }

    // 注意
    else {
      // Iter.next().value  Iter 是迭代器
      this.lruQueue.set(key, value);
      this.lruQueue.delete(this.lruQueue.keys().next().value);
    }
  }

  get(key) {
    // 注意
    if (this.lruQueue.has(key)) {
      let value = this.lruQueue.get(key);
      this.put(key, value);
      return value;
    } else return -1;
  }
}

// 实现一个 add 方法
// 题目描述: 使计算结果能够满足如下预期： add(1)(2)(3)()=6 add(1,2,3)(4)()=10

function add() {
  let numArr = [...arguments];
  let fn = function() {
    let args2 = [...arguments];
    if (!args2.length) {
      return numArr.reduce((a, b) => a + b);
    }
    numArr.push(...args2);
    return fn;
  };
  return fn;
}

// 实现 数组扁平化
// 实现一个方法使多维数组变成一维数组
// arr[1, [2,[3,4]]]

// 第一种 主要是利用 concat 和 递归操作
function flat(arr, num = 1) {
  if (num <= 0) return arr;

  let flatArr = [];
  let ifHasArray = false;

  arr.forEach((e, i) => {
    if (Array.isArray(e)) {
      hasArray = true;
      flatArr = flatArr.concat(e);
    } else {
      flatArr.push(e);
    }
  });

  if (ifHasArray) return flat(flatArr, num--);

  return flatArr;
}

// 第二种是利用while循环
function flat(arr, num = 1) {
  while (num > 0 && arr.some((item) => Array.isArray(item))) {
    --num;
    arr = [].concat(...arr);
  }
  return arr;
}

// 实现 reduce 函数
// arr.reduce((a, b) => { return a + b }, num)
Array.prototype.myReduce = function(callback, num) {
  let arr = this;
  let i = 0;
  let preValue = num;

  if (!num) {
    preValue = arr[0];
    i = 1;
  }

  while (i < arr.length) {
    preValue = callback(preValue, arr[i], i, arr);
    i++;
  }
  return preValue;
};

// 手写Promise
class MyPromise {
  static pending = "pending";
  static success = "success";
  static fail = "fail";
  constructor(callback) {
    this.status = MyPromise.pending;

    this.successDate = "";
    this.failData = "";
    this.successFunc = "";
    this.failFunc = "";

    callback(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(...args) {
    if (this.status !== MyPromise.pending) return;

    this.status = MyPromise.success;
    this.successDate = args;

    this.successFunc(...args);
  }

  reject(...args) {
    if (this.status !== MyPromise.pending) return;

    this.status = MyPromise.fail;
    this.failData = args;

    this.failFunc();
  }

  then(successFunc, failFunc) {
    return new Promise((resolve, reject) => {
      this.successFunc = () => {
        let data = successFunc(this.successDate);
        resolve(data);
      };
      this.failFunc = () => {
        let data = failFunc(this.failData);
        reject(data);
      };
    });
  }
}

// 请实现 DOM2JSON 一个函数，可以把一个 DOM 节点输出 JSON 的格式
```
<div>
  <span>
    <a></a>
  </span>
  <span>
    <a></a>
    <a></a>
  </span>
</div>

把上诉dom结构转成下面的JSON格式

{
  tag: 'DIV',
  children: [
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] }
      ]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] }
      ]
    }
  ]
}
```;
// 主要是 tagName 能获取标签，childNodes 能获取元素内容
function DOM2JSON(domTree) {
  let obj = {};
  // 判断元素类型
  let tag = domTree.tagName;
  obj.tag = tag;
  obj.children = [];

  domTree.childNodes.forEach((e) => obj.children.push(DOM2JSON(e)));
  return obj;
}
// 类数组转化为数组的方法
const arrayLike = document.querySelectorAll("div");

// [...arrayLike];
Array.from(arrayLike);

Array.prototype.slice.call(arrayLike);
Array.prototype.concat.apply([], arrayLike);
Array.apply(null, arrayLike);

// 28 Object.is 实现
// 题目描述:
// Object.is不会转换被比较的两个值的类型，这点和===更为相似，他们之间也存在一些区别。
//     1. NaN在===中是不相等的，而在Object.is中是相等的
//     2. +0和-0在===中是相等的，而在Object.is中是不相等的
Object.is = function(x, y) {
  if (x === y) {
    return x !== 0 || x / 1 === y / 1;
  }

  // return isNaN(X) && isNaN(y)
  return x !== x && y !== y;
};

// 29
// 题目描述:利用 XMLHttpRequest 手写 AJAX 实现
function MyAJAX(option) {
  let { url, type, header, success, fail } = { ...option };
  let xml = new XMLHttpRequest();

  xml.open(type, url, true);
  xml.setRequestHeader("content-type", "application/json");
  xml.onreadystatechange = function() {
    if (xml.readyState !== 4) return;

    if (xml.status == 200 || xml.status == 304) {
      success(xml.responseText);
    } else {
      fail(new Error(xml.responseText));
    }
  };
  xml.send();
}

// 30 分片思想解决大数据量渲染问题
// 题目描述: 渲染百万条结构简单的大数据时 怎么使用分片思想优化渲染 实现代码如下:
// 其实就是利用 windows.requestAnimationFrame  和 递归
let total = 100000;
let once = 20;
let index = 0;
let ul = document.getElementById("container");

function loop(curTotal, curIndex) {
  if (curTotal <= 0) return;

  let page = Math.min(curTotal, once);

  window.requestAnimationFrame(() => {
    // 正常逻辑
    for (let index = 0; index < page; index++) {
      let li = document.createElement("li");
      li.innerText = `${curIndex + index} : ${~~Math.random() * total}}`;
      ul.appendChild(li);
    }
    loop(curTotal - page, curIndex + page);
  });
}
loop(total, index);

// 31.
// 题目描述:JSON 格式的虚拟 Dom 怎么转换成真实 Dom
// 主要是 document 的 属性  createElement setAttribute  appendChild
{
  tag: 'DIV',
  attrs:{
  id:'app'
  },
  children: [
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: "sdsf" }
      ]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] }
      ]
    }
  ]
}
把上诉虚拟Dom转化成下方真实Dom
<div id="app">
  <span>
    <a></a>
  </span>
  <span>
    <a></a>
    <a></a>
  </span>
</div>

function render(vnode) {
  
  if(typof vnode == 'number'){
    vnode = String(vnode)
  }

  if(typeof vnode == 'string') {
    return document.createTextNode(vnode)
  }

  let dom = document.createElement(vnode.tag);
  
  if(vnode.attrs) {
    Object.keys(vnode.attrs).forEach(key => {
      dom.setAttribute(key ,vnode.attrs[key])
    })
  }

  if(vnode.children){
    vnode.children.forEach(item => {
      dom.appendChild(render(item))
    })
  }

  return dom
}

// 32实现模板字符串解析功能
let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
  name: '姓名',
  age: 18
}
render(template, data); // 我是姓名，年龄18，性别undefined

function render_(template, data) {
 let computed = template.replace(/\{\{\w+\}\}/g, function(match, value){
    return data[value]
 })
 return computed
}

// 33 实现一个对象的 flatten 方法
// 定义全局参数，递归
const obj = {
  a: {
         b: 1,
         c: 2,
         d: {e: 5}
     },
  b: [1, 3, {a: 2, b: 3}],
  c: 3
 }
 
 flatten(obj) 
 // 结果返回如下
 // {
 //  'a.b': 1,
 //  'a.c': 2,
 //  'a.d.e': 5,
 //  'b[0]': 1,
 //  'b[1]': 3,
 //  'b[2].a': 2,
 //  'b[2].b': 3
 //   c: 3
 // }
 function flatten(obj) {
  let res = {};

  function b(cur, key) {
    if(typeof cur !== 'object') {
      return res[key] = cur
    }

    let isArray = Array.isArray(cur);

    for (const k in cur) {
      if (Object.hasOwnProperty.call(cur, k)) {
        if(isArray) {
          b(cur[k], `${key}[${k}]`)
        }else{
          b(cur[k], `${key}${k}${typeof cur[k] == 'object' ? '.' : ''}`)
        }
      }
    }
  }

  b(obj, '')
  return res
}

// 34 列表转成树形结构
 [
  {
      id: 1,
      text: '节点1',
      parentId: 0 //这里用0表示为顶级节点
  },
  {
      id: 2,
      text: '节点1_1',
      parentId: 1 //通过这个字段来确定子父级
  }
  ...
]

转成
[
  {
      id: 1,
      text: '节点1',
      parentId: 0,
      children: [
          {
              id:2,
              text: '节点1_1',
              parentId:1
          }
      ]
  }
]
// 
function listToTree(data) {
  let temp = {}
  let res = []

  data.forEach(item => {
    temp[item.id] = item;
  })

  for(let id in temp) {
    let value = temp[id];
    let parentId = value.parentId;

    if(parentId !== 0) {
      if(!temp[parentId].children) {
        temp[parentId].children = []
      }
      temp[parentId].children.push(value)
    } else {
      res.push(value)
    }
  }

  return res
}


// 35 树形结构转成列表
[
  {
      id: 1,
      text: '节点1',
      parentId: 0,
      children: [
          {
              id:2,
              text: '节点1_1',
              parentId:1
          }
          {
            id:3,
            text: '节点1_1',
            parentId:1
        }
      ]
  }
]
转成
[
  {
      id: 1,
      text: '节点1',
      parentId: 0 //这里用0表示为顶级节点
  },
  {
      id: 2,
      text: '节点1_1',
      parentId: 1 //通过这个字段来确定子父级
  }
  ...
]
function treeToList(data){
  let temp = []
  let obj = data[0];

  setInfo(obj);

  function setInfo(item){
    temp.push({
      id: item.id,
      text: item.text,
      parentId: item.parentId,
    })
    
    if(item.children) {
      item.children.forEach(item => {
        setInfo(item)
      })
    }
  }
}

// 36 大数相加
let a = "9007199254740991";
let b = "1234567899999999999";

function add(a ,b){
   //...
}

function add(a, b){
  let maxLength = Math.max(a, b)

  a = a.padStart(maxLength, 0)
  b = b.padStart(maxLength, 0)
  
  let f = 0 // 进位
  let sum = ''
  for (let index = maxLength -1 ; index >= 0; index--) {
    t = parseInt(a[i]) + parseInt(b[i]) + f // 14
    f = Math.floor(t / 10)
    sum = t % 10 + sum
  }

  if(f !== 0){
    sum = '' + f + sum;
  }
  return sum
}


// promise all
let promise1 = new Promise(function (resolve) {
  resolve(1);
});
let promise2 = new Promise(function (resolve) {
  resolve(2);
});
let promise3 = new Promise(function (resolve) {
  resolve(3);
});

let promiseAll = Promise.all([promise1, promise2, promise3]);
promiseAll.then(function (res) {
  console.log(res);
});

Promise.myAll = function (promiseArr) {
  return new Promise((resolve, rej) => {
    let arr = [];
    let len = 0;
    promiseAll.forEach((pro, index) => {
      pro.then((res) => {
        len++;
        arr[index] = res;
        if (len == promiseAll.length) {
          resolve(arr);
        }
      });
    });
  });
};


// 并发控制
function promiseLimit(promiseArr, limit) {
  let result = []
  let len = promiseArr.length
  for(let i = 0; i < limit -1; i++) {
    startPromise(i) 
  }
  let i = 0
  function startPromise (i) {
    i++
    let _promise = promiseArr.shift()
    _promise().then(res => {
      result.push(res)
      startPromise()
    }, (rej) => {
      result.push(rej)
      startPromise()
    })
  }


  return new Promise()
}
