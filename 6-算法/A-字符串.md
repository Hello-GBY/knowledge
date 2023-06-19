====== 
真题描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

示例 1: 输入: "aba"
输出: True
示例 2:
输入: "abca"
输出: True
解释: 你可以删除c字符。
注意: 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。

```js
function validPalindrome(str) {
    let i = 0;
    let j = str.length - 1

    while( i < j && str[i] == str[j]){
      i++;
      j--;
    }

    if (isPalindrome(i + 1, end) ) { 
      return true
    }
    if (isPalindrome(i , end -1) ) { 
      return true
    }

    function isPalindrome(start, end) {
      while(start < end) {
        if(str[start] !== str[end]) return false
        start++ ;
        end -- ;
      }
      return true
    }

    return false
}
```

======= 字符串正则 ========

```js
function wordDictionary() {
   this.words = {}
}

wordDictionary.prototype.addWord(str) {
  if(!this.words[str.length]) {
    this.words[str.length] = [str]
  }else {
    this.words[str.length].push(str)
  }
}

wordDictionary.prototype.search(str) {
  let arr = this.words[str.length]

  if(str.indexOf('.') > -1){
    let reg = new RegExp(str)
    return arr.some( str=> {
        return reg.test(item)
    })
  }

  return arr && arr.includes(str)
}

```
