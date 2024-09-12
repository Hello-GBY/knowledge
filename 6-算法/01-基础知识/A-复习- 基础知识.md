# 数组

## 数组创建

new Array(1,2,3)
Array.from({length: 3}, (v, i) => i)
.fill() // 填充

## 数组增加元素

push 尾加入
unshift 头加入

## 数组删除元素

pop 尾删除
shift 头删除 (谁扶她)

## 数组修改

splice 数组修改 （sp 来失）
slice

## 题型

两数据求和： 用 map 一次遍历
三数据求和： 用三指针 要跳过重复元素
合并两个有序数组： 从后往前遍历

觉得无聊的话： 看看这个题库 https://bigfrontend.dev/zh

# 二叉树遍历

### 先 中 后，层序遍历

```js
function preorder(root) {
  // 递归边界，root 为空

  if (!root) {
    return;
  }
  // 递归遍历左子树
  preorder(root.left);
  // 递归遍历右子树
  preorder(root.right);
}
```

# 字符串

反转字符串
str.split().reverse().join();

你知道哪些字符串操作方法？
tc39? 这个组织制定规范

## 题型

> 判断是不是回文子串

1. 对比反转之后的
2. 遍历 i 和 len - i -1 对比 。对比次数 len / 2

# 链表

链表 解法 虚拟指针

dummy ： 当需要前驱节点的时候

经典例题：

1. 合并两个有序链表
   相当于遍历
2. 删除重复元素
   创建虚拟节点
   快慢指针
3. 返回倒数第 n 个节点
   也是快慢指针
4. 环形链表 有几种 方式?
   快的走两步 慢的走一步
   用 map
   打标记
5. 反转链表

# 栈、队列

1. 例题：有效括号
   输入: "(]"
   输出: false

```js
function queue(str) {
  let stack = [];
  let arr = str.split("");
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      stack.push(map[arr[i]]);
    } else {
      if (arr[i] !== stack.pop(arr[i])) return false;
    }
  }

  return stack.length == 0;
}
```

2. 温度问题

# 队列

1. 如何用栈实现一个队列？

# DFS \ BFS

深度优先遍历
广度优先遍历

怎么进行广度优先遍历？

# 递归、回溯

## 全排列？

题目描述：给定一个没有重复数字的序列，返回其所有可能的全排列。

```js
// 全排列
const permute = function (nums) {
  const len = nums.length;
  const cur = [];
  const res = [];
  const v = {};

  function dfs(nth) {
    if (nth === len) {
      res.push(cur.slice());
      return;
    }

    for (let i = 0; i < len; i++) {
      if (!v[nums[i]]) {
        cur.push(nums[i]);
        v[nums[i]] = 1;
        dfs(nth + 1);
        v[nums[i]] = 0;
        cur.pop();
      }
    }
  }

  dfs(0);

  return res;
};
```

## 组合问题：

```js
题目描述：给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
说明：解集不能包含重复的子集。

示例: 输入: nums = [1,2,3]
输出:
[
[3],
[1],
[2],
[1,2,3],
[1,3],
[2,3],
[1,2],
[]
]
```

```js
const subsets = function (nums) {
  // 初始化结果数组
  const res = [];
  // 缓存数组长度
  const len = nums.length;
  // 初始化组合数组
  const subset = [];
  // 进入 dfs
  dfs(0);

  // 定义 dfs 函数，入参是 nums 中的数字索引
  function dfs(index) {
    // 每次进入，都意味着组合内容更新了一次，故直接推入结果数组
    res.push(subset.slice());
    // 从当前数字的索引开始，遍历 nums
    for (let i = index; i < len; i++) {
      // 这是当前数字存在于组合中的情况
      subset.push(nums[i]);
      // 基于当前数字存在于组合中的情况，进一步 dfs
      dfs(i + 1);
      // 这是当前数字不存在与组合中的情况
      subset.pop();
    }
  }
  // 返回结果数组
  return res;
};
```

## 限定组合问题：及时回溯，即为“剪枝”

题目描述：给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

示例: 输入: n = 4, k = 2
输出:
[
[2,4],
[3,4],
[2,3],
[1,2],
[1,3],
[1,4],
]

# 二叉树

> 题目描述：给定一个二叉树，返回它的前序（先序）遍历序列。
> 示例: 输入: [1,null,2,3]

1  
 \  
 2  
 /  
3

## 先序遍历

```js
const preorderTraversal = function (root) {
  let queue = [];
  let list = [];
  queue.push(root);
  while (queue.length) {
    let l = queue.pop();
    list.push(l.val);
    l.right && queue.push(l.right);
    l.left && queue.push(l.left);
  }
  return list;
};
```

## 后续遍历

```js
const preorderTraversal = function (root) {
  let queue = [];
  let list = [];
  queue.push(root);
  while (queue.length) {
    let l = queue.pop();
    list.unshift(l.val);
    l.right && queue.push(l.right);
    l.left && queue.push(l.left);
  }
  return list;
};
```

192.168.0.0/16,10.0.0.0/8,172.16.0.0/12,127.0.0.1,localhost,_.local,timestamp.apple.com,sequoia.apple.com,seed-sequoia.siri.apple.com,192.168.0.0/16,10.0.0.0/8,172.16.0.0/12,127.0.0.1,localhost,_.local,timestamp.apple.com,sequoia.apple.com,seed-sequoia.siri.apple.com,seed.test.mindflow.work,\*.mindflow.work,api.test.mindflow.work
