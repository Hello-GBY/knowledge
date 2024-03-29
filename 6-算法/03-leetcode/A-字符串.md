# 14. 最长公共前缀
> 编写一个函数来查找字符串数组中的最长公共前缀。
> 如果不存在公共前缀，返回空字符串 ""。

> 示例 1：
> 输入：strs = ["flower","flow","flight"]
> 输出："fl"
> 示例 2：
> 输入：strs = ["dog","racecar","car"]
> 输出：""
> 解释：输入不存在公共前缀。

**思路: 双层for循环，第二层循环元素 判断对应的下标值是否一样，记录j位置 然后 str.slice(0, j) 就是当前的公共前缀** 

# 13. 罗马数字转整数
> 字符          数值
> I             1
> V             5
> X             10
> L             50
> C             100
> D             500
> M             1000

输入: s = "III"
输出: 3
输入: s = "IX"
输出: 9
例如：XIV 可视作 X−I+V=10−1+5=14。

**思路：  创建 map 存放映射关系；循环的时候  i 和 i+1 进行比较 如果 i小于i+1 则 减去该值**

# 58. 最后一个单词的长度
> 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。
单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

输入：s = "Hello World"
输出：5
解释：最后一个单词是“World”，长度为5。

输入：s = "luffy is still joyboy"
输出：6
解释：最后一个单词是长度为6的“joyboy”。


**思路： 反向遍历即可，
      用while 先定位到 非空位置
      然后在用 while 定位到 空位置**

# 3. 无重复字符的最长子串
> 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

> 示例 1:

> 输入: s = "abcabcbb"
> 输出: 3 
> 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
> 示例 2:

> 输入: s = "bbbbb"
> 输出: 1
> 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
> 示例 3:

> 输入: s = "pwwkew"
> 输出: 3
> 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

思路：采用滑动窗口的思想（双指针 + 遍历法），创建一个指针 指向第一个 用来代表要抛弃的字符长度，用 map 来存放元素 和下标值

只需遍历一次

遍历的时候 判断是不是map中已经存在 并且 rk的值小于等于 get 的下标值
 每次都 对比 max
 每次都 存放 set


# 最长回文子串

给你一个字符串 s，找到 s 中最长的回文子串。

如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。

 

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"

链接：https://leetcode.cn/problems/longest-palindromic-substring

> 思路：用动态规划的思想

// 先创建二维矩阵数组

// 给每个 ii 赋值为true

// 先外层遍历 j 内部遍历 i
dp[i][j]

// s[i] 是否等于 s[j]

if(i - j >= 3) => 需要注意
dp[i][j] = dp[i+1][j-1]

else dp[i][j] = true

// 其中另一个需要注意的 就是 获取最长的子串

if(dp[i][j] && i - j + 1 > res.length){
      res = s.slice(i, j+1);
}





 每次都 存放 set

 


# 
原地修改

双指针遍历即可

# 剑指 Offer 05. 替换空格
输入：s = "We are happy."
输出："We%20are%20happy."

可以使用 编码设置

可以使用遍历

可以使用 replace(/ /g, '%20')


# 有效的字母异位词
输入: s = "anagram", t = "nagaram"
输出: true
// 先判断length

// 然后
用数组存放 

主要是 str.codePointAt(index) 来获取值


# 最长回文子串
输入:s = "abccccdd"
输出:7
解释: 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。


通过遍历 拿到所有键值对 然后 遍历key 如果偶数就+上
如果是奇数就加上 -1

有一个 key 值 来判断当前是不是 奇数 需要 +1


# N 字形变换
按照周期进行运算

i % t < r -1
的时候  K++;
其余的时候 K-- V++ 

周期是 ： t =  r + r -2
列是：r-1


# 17. 电话号码的字母组合
输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]

边遍历树 边剪枝

这道题 需要 遍历过的 不继续遍历 可以用 下标来进行定位


<!-- 经典回溯算法 -->
回溯算法基本框架
function backtrack(数据 ， list) {
     if 满足结束条件:
        result.add(路径)
        return

      
      for 选择 in 选择列表:
            <!-- 按需判断条件 判断是不是已经标识过 就 return -->
            数据.push()
            backtrack(数据 ， list)
            数据.pop()
}     

# 22. 括号生成
输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]

// 这种就是 回溯 剪枝
 
长度是  2 * n

还有两个先决条件

1. 左括号 要 大于等于 右括号 数量
2. 左括号 和 右括号 的数量 相等

在 push 的 之前进行判断


# 最长回文子串
第二种解法 可以用双指针进行遍历

```
function 
      for(let i = 0; i < s.length; i++){
      let s1 = sortStr(s, i, i)
      let s2 = sortStr(s, i, i+1)
      let s = s1.length > s2.length ? s1 : s2
      res = res.length > s.length ? res : s

function sortStr(s, l, r){
      while(l >= 0 && r < s.length && s[l] === s[r]){
            l--;
            r++;
      }
      return s.slice(l+1, r)
}
```
