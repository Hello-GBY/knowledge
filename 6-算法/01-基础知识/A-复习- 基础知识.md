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

例题：有效括号
输入: "(]"
输出: false

function queue(str) {
let stack = [];
let arr = str.split('');

}
