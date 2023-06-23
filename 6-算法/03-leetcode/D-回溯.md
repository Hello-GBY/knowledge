# 子集
输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

思路： 子集问题 对应回溯 遍历下标 要不断变化 start + 1；把每次的循环都放到结果集中

```js
var subsets = function(nums) {
    let res = []

    function backtrack(arr, start) {
        res.push(arr.slice())
        for(let i = start; i< nums.length ; i++){
            arr.push(nums[i])
            backtrack(arr, i+1) // i+1 保证不重复
            arr.pop()
        }
    }
    backtrack([], 0)  
    return res
};
```
