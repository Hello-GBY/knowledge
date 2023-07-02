# 两数之和
比较简单 用 map 就行
判断否存在 返回值即可



# 合并有序数组
let num1 = [1,2,3,8,9]
let num2 = [4,5,6,7,10]

i = 0
j = 0

思路就是 双指针 加 反向 遍历

// 定义 左右指针 和游标m len1 +len2 -1

// 定义外层循环 => 条件 j < 0 || i < 0
// if nums1[i] > nums2[j]
//    nums1[m] = nums1[i];  i++
// else nums1[m] = nums1[i]; j++
// m--
// 返回 nums1


# 删除有序数组中的重复项
输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]

思路：
双指针

定义下标 初始值都是 1

// 为了 nums[j] !== nums[j-1]
// 


# 35. 搜索插入位置
// 请必须使用时间复杂度为 O(log n) 的算法。
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
请必须使用时间复杂度为 O(log n) 的算法。

输入: nums = [1,3,5,6], target = 5
输出: 2

思路： 二分查找
定义左右指针，定义返回值默认等于 nums.length

循环 条件 while(left <= right)

找到中位数 mid = Math.floor((right - left) / 2) + left

if(target <= nums[mid]) 
    right = mid -1
    ans = mid
else 
    left = mid + 1

返回 mid

# 283. 移动零
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
请注意 ，必须在不复制数组的情况下原地对数组进行操作。

输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]

// 思路：左右指针 left 用于记录排序的, 不要考虑零

let left = 0, right = 0;
// while(right < n) {
//   if(nums[right] != 0) 
//    转换 [nums[i], nums[j]] = [nums[j], nums[i]]

}

# 二分查找
思路 左右指针 
let mid = (right - left) / nums

let left = 0, right = nums.length - 1, ans = nums.length;

# 在排序数组中查找元素的第一个和最后一个位置
给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
如果数组中不存在目标值 target，返回 [-1, -1]。
你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]

思路：二分查找 【关注细节】

先判断数组长度 空 返回【-1，-1】
二分查找【查找 最 left的情况】
   while(left < right) 
    mid = Math.floor((right + left) / 2)
    mid < target left = mid + 1  mid == target : right = mid  .....
   left 当前值 是不是等于 -1

二分查找【查找位置 最right的情况】
   while(left < right) 
   [这块是有 + 1]
    mid = 
    mid < target left = mid + 1  mid == target : left = mid  .....









 # 最大子数组相加
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

思路：贪心
      初始 时 maxvalue =  curSum = nums[0]
      计算之前和 + 当前值 和 当前值对比 判断是不是要抛弃之前得和
      然后用对比出来得值和 maxvalue 进行对比

```js
let maxValue = curSum = nums[0]

nums.forEach((cur, i) => {
if(i == 0) return
      curSum = Math.max(cur, curSum + cur)
      maxValue = Math.max(maxValue, curSum)
})
return maxValue
```
# 三数之和

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]


思路：就是三指针

先排序，外层循环定义 target 
内层循环 左右指针

left = target + 1
right = nums.length -1

不断的：
left++ 
right--

去重处理
第一层循环中
当 target 与 target -1 相等时跳过
当 left、right
while(left < right && nums[right] == nums[right - 1]) right--;
while(left < right && nums[left] == nums[left + 1]) left++;


# 全排列
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

思路：
    采用dfs 的深度遍历 ， 把他想成一棵树

    不断递归 和 for循环  递归出口 就是 数组长度
    ...
    function dfs (nth) {
      // 定义出口
      if len == nums.length
          res.push(cur.slice())

      for
          if(v[i] !== 1) {
            cur.push(nums[i])
            v[i] =1
            dsf(nth+1)
            cur.pop()
            v[i] = 0
          }
    }
    dfs(0)
while(left < right && nums[left] == nums[left + 1]) left++;


# 跳跃游戏
输入：nums = [2,3,1,1,4]
输出：true
解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。

思路：
遍历数组
返回true的情况 判断： i + nums[i] 和 nums.length -1 的大小

当 i > jump 的时候 返回false

# 最长递增子序列
给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。

思路：
    定义dp 默认填充 1 
    双层遍历
    第一层遍历当前值
    第二层 从 0 - i
      判断是不是目标值大于 判断值 将 判断值+1 和当前 dp[i] 对比
      if(nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1)

    max变量用来计算 是否当前是最大值 max = Math.max(dp[i] , max)


# 合并区间
输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6]

输入[[1,4],[0,4]]
输出[[0,4]]
预期结果[[0,4]]

思路：
先排序
res= []
let pre = intervals[0];
遍历数组

需要有一个当前合并数组作为变量，也就是每次 合并不了的时候  放入到res中

for let i = i ; XXXXX
  // 可以合并
  if(pre[1] >= cur[0]){
            pre[1] = Math.max(pre[1], cur[1]);
  } else {
      // 每次遇见不能合并的记录
      res.push(pre);
      pre = cur;
  }


res.push(pre)

return res

# 数组中的第K个最大元素
给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
输入: [3,2,1,5,6,4], k = 2
输出: 5

输入: [3,2,3,1,2,4,5,5,6], k = 4
输出: 4

思路：
直接快排就完事了，注意不需要去重，因为题目说是第K个，不是不用的元素的 第k个

快排思路：递归 + 循环

function quickSort(left , right){
    if(left > right) return 
    let p = sort...
    if left < p-1 :  quickSort(left, p -1)
    if right > p :  quickSort(p, right)
}

function  sort (left, right) {
    let pivVale = nums[Math.floor((left + right) /2)]
    while(left <= right) {
        while(nums[left] < pivValue) {
            left++;
        }
          while(nums[right] > pivValue) {
            right--;
        }
        if(left <= right) {
            swap(left, right)
            left++
            right-- 
        }
    }

    return left // 注意要返回的是 left
}


# 数组移除元素
用双指针的方式
用快慢指针及计算长度的方式，即可完成排序

输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,4,0,3]

var removeElement = function(nums, val) {
    let slow = 0, fast = 0;

    while(fast < nums.length) {
        if(nums[fast] !== val) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return slow
}
