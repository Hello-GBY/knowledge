# 1. Map Set 的区别？

### 作用不同
Map 是  key value 键值集合 存储 key 可以是对象
Set 是 集合 key 没有重复的数据

### 语法不同
```js
// set
let mySet  = new Set()
mySet.add() // 增
mySet.delete() // 删
mySet.has() // 查
mySet.clear() // 全部删除
mySet.size // 注意不是 length 来获取集合大小

// 数组去重
const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]
console.log([...new Set(numbers)]) // [2, 3, 4, 5, 6, 7, 32]
console.log(Array.from(numbers)) // [2, 3, 4, 5, 6, 7, 32]

// 展开字符串 
let text = 'India';
let mySet = new Set(text);  // Set {'I', 'n', 'd', 'i', 'a'}
mySet.size;  // 5

// 展开字符串一般不像上面那样用 
let text = 'India';
text.split('') // ['I', 'n', 'd', 'i', 'a']
```

```js
let myMap  = new Map();
myMap.set('name', '张三'); // 不是add
myMap.get('name'); // set 没有get
myMap.delete('name');
mySet.size // 注意不是 length 来获取集合大小

```
> 总结：
> map 存放的 key value 键值对集合， set 是存放不重复元素 的集合 
> map 增删改查是 set、delete、(key值 + set)、get
> set 增删改查是 add、delete、(add + delete)、has
> 都是通过 .size 获取数据的
> 遍历都可 foreach
> 实际使用过： set用于数组去重 需要将set集合转化为数组 （1.展开运算符 2.Array.from ） map 可用于存储key值对象类型

# 2. Map和Object的区别
map 可以是 对象为键值

# 3. 用过数组哪些方法
### 遍历
foreach (里面有异步 不会同步执行)
map
find 当结果为真的时候 当前迭代元素的值
findIndex
every 
some 
filter 保存结果为真的数据

### 其他
```js
unShift() // 对头部进行操作
shift()  // 对头部进行操作
push() // 对尾部进行操作
pop() // 对尾部进行操作

splice() // 对数组 增 删 改 改变元素组
slice() // 对数组提取  不改变原数组

includes() 
join() // 

reverse() // 会改变原数组
sort()  // 会改变原数组
```
口诀： 遍历： 3f在 es f
             对头（shift）对尾（p p） 在（in）撕破（sp ）历史（slice） jrs 
 

# 4. es6新特性 
```js
class
模块化
箭头函数
展开运算符
函数默认参数

Map、Set
let、const

Promise

口诀： 类模箭展解字默
       SetMap来PS

es7

includes

object.values
object.enrties

await async 
promise.finally
allSettled

可选catch

trimStart() trimEnd()
BigInt
数组flat
replaceAll()
可选连调用
```

# Promise 使用过哪些方法
### 实例方法
```js
.then()
.catch()
.finally()
```

### 构造函数
```js
resolve()
reject()
all()  // 全部成功 才会改变状态 返回一个数组 ，有一个不成功 就 传递这个不成功的值
race() // 赛跑  第一个状态率先改变的
allSettled() // 都稳定下来 等到所有都有状态改变时 返回结果
any()  // 第一个成功的
```

### 原理
构造函数
1. 当前状态
2. 成功的值
3. 失败的原因
4. 成功的回调函数
5. 失败的回调函数

立即执行传递的函数 传递默认参数（this.resolve, this.reject）

resolve（） {
    // 更改状态
    执行回调函数
}
reject（）{ 同上 }

then() {
    赋值成功的回调函数
    赋值失败的回调函数
    返回新的Promise
}