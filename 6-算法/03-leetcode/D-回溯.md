# 子集
// 元素无重不可复选

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

#  子集 II
输入：nums = [1,2,2]
输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
// 元素可重不可复选

// 1.排序
  nums.sort((a,b) => a-b)
// 2.剪枝
if(i > start && nums[i] === nums[i-1]) continue


// 如果不做上面的操作可能会出现重复的子集 例如 [1,2,2] 会出现 [1,2] [1,2] 两个子集

```js
var subsetsWithDup = function(nums) {

    // 排序，以便于剪枝算法的实现
    nums.sort((a, b) => a - b);

    let res = []
    function backtrack(arr, start) {
        res.push(arr.slice())

        for(let i = start; i < nums.length; i++) {

            if(i > start && nums[i] == nums[i-1]) continue;

            arr.push(nums[i])
            backtrack(arr, i+1)
            arr.pop()
        }
    }

    backtrack([], 0)
    return res
};
  
```
