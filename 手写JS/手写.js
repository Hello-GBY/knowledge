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
    let args =  [...arguments]

    let i = 0
    let fun = function (v) {
        if( i>= args.length) {
            i = 0
            return v
        }

        v = args[i](v)
        i++
        return fun(v)
    }

    return fun
};
// 第二种：解法
var compose = function () {
    if (!arguments.length) return (v) => v;
    if (arguments.length == 1) return (v) => arguments[0](v);
    let args = [...arguments]

    return function (v) {
        return args.reduce((pre, cur)=>{
            console.log('cur: ', cur);
            return cur(pre)
        }, v)
    }
};


// 2 settimeout 模拟实现 setinterval(带清除定时器的版本)
//  题目描述:setinterval 用来实现循环定时调用 可能会存在一定的问题 能用 settimeout 解决吗
function MySetInterval(cb, time) {
    let _timer;
    let fun = function () {
        _timer = setTimeout(() => {
            cb()
            fun()
        }, time)
        return _timer
    }
    return () => _timer
}

function myClearInterval (timer) {
    clearTimeout(timer)
}

// 发布订阅模式
// 题目描述:实现一个发布订阅模式拥有 on emit once off 方法

class Event {
    constructor () {
        this.eventList = {}
    }
    on(type, fn) {
        if(!fn) return
        if(!this.eventList[type]) this.eventList[type] = []

        this.eventList[type].push(fn)
    }
    emit(type, ...args) {
        if(!type) return
        this.eventList[type] && this.eventList[type].forEach(fn => fn(...args))
        
    }
    once(type, fn) {
        let that = this
        let _fn =  function() {
            try {
                fn()
            } catch (error) {
                console.log('error: ', error);
            }
            that.off(type, _fn)
        }
        this.on(type, _fn)
    }
    off(type, fn) {
        if(!type) return
        if(!this.eventList[type]) return
        if(!fn) {
            this.eventList[type].length = 0
            return
        }
        // 第一种方法
        // findIndex + splice
        // let index = this.eventList[type].findIndex((f) => fn = f)
        // if(index == -1) return
        // this.eventList[type].splice(index, index+1)
        // 第二种方法
        this.eventList[type] = this.eventList[type].filter(func => func !== fn)
    }
}

// 离线的触发


// 手写 promise.all 和 race

function myAll (fns) {
    let resAll = [];
    let j = 0;

    return new Promise((resolve, rej) => {
        fns.forEach((fn, i) => {
            fn.then((res) => {
                ++j; 
                resAll[i] = res;
                if(j == promiseLen) resolve(resAll);
            })
        })
    })  
}

function race (fns) {
    return new Promise((resolve, reject) => {
        for (const fn of fns) {
            
        }
    })
}