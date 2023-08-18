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

先 中 后，层序遍历

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
