# Map Set 的区别？

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

# Map和Object的区别
map 可以是 对象为键值

# 用过数组哪些方法
### 遍历
foreach (里面有异步 不会同步执行)
map
find 当结果为真的时候 当前迭代元素的值

