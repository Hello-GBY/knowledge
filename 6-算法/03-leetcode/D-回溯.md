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


#  组合
题目： 从 n 个数中选 k 个数
给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

你可以按 任何顺序 返回答案。

** 也是子集问题  但是只记录 k 个数的子集 **
  
反映到代码上，只需要稍改 base case，控制算法仅仅收集第 k 层节点的值即可：



```js
  // base case
  if (k === track.length) {
      // 遍历到了第 k 层，收集当前节点的值
      res.push([...track]);
      return;
  }
```

# 39. 组合总和
输入：candidates = [2,3,6,7], target = 7
输出：[[2,2,3],[7]]
解释：
2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
7 也是一个候选， 7 = 7 。
仅有这两种组合。

>candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 

思路： 因为可以重复选取，所以每次递归的时候，start 传入 i，而不是 i+1

需要注意的是，这里的 candidates 是无重复元素的，如果有重复元素，需要先去重，再进行回溯。

然后针对判断条件 if(trackSum > target) return; 进行剪枝 防止一直递归下去
  
```js
var combinationSum = function(candidates, target) {
  let res = [];
  let track = [];
  let trackSum = 0;


  function backtrack(start, nums, target) {

      if(trackSum == target) {
          res.push(track.slice())
      }

      if(trackSum > target) {
          return
      }

      for(let i = start; i < nums.length ; i++){
          trackSum += nums[i]
          track.push(nums[i])
          backtrack(i, nums, target)
          trackSum -= nums[i]
          track.pop()
      }
  }

  backtrack(0, candidates, target);
  return res
};
```


# 组合总和 II
输入: candidates = [10,1,2,7,6,1,5], target = 8,
输出:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用 一次 。

针对于有重复 就需要排序
就需要判断 if(i > start && nums[i] === nums[i-1]) continue;

不让重复用 就需要 i+1


47. 全排列 II
给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

示例 1：

输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]

 因为元素不重复 需要 定义 use 数组

 因为元素重复 需要排序 以便于剪枝
 因为元素重复 需要判断 if(i > 0 && nums[i] === nums[i-1] && !use[i-1]) continue;
