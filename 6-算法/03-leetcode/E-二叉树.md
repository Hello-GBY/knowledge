# 二叉树最大深度
定义返回值
定义临时变量

```js
function traverse(root) {
    if(!root) return
    dep++
    if(root.left == null && root.right == null) {
        res = Math.max(dep, res)
    }
    traverse(root.left)
    traverse(root.right)
    dep--
}
```


# 二叉树的直径
二叉树的直径定义为二叉树中任意两个节点的最长路径的长度。

思路：左子树的深度 + 右子树的深度 + 就是利用后续遍历的思想
     
```
<!-- 递归函数  return 1 + Math.max(left, right) // 这块是重点 -->
let res = 0
function traverse(root) {
    // 定义出口

    // 递归
    let left = traverse(root.left)
    let right = traverse(root.right)

    let curLoop = left + right
    res = Math.max(res, curLoop)

    return 1 + Math.max(left, right) // 这块是重点
}
```
