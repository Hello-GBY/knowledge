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

