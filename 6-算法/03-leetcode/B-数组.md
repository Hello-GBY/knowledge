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









