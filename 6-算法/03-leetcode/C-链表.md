# 合并两个有序链表

// 思路定义一根针 let head = new ListNode()
let cur = head
// 循环条件 while(list1 && list2)
// if(list1.val ....) 比大小
cur.next = list
list = list.next
反之依然
// cur = cur.next //指向下一个节点
// 循环完 判断有没有剩余
cur.next = list1 == null ? list2 : list1

return head.next

# 删除排序链表中的重复元素

输入：head = [1,1,2]
输出：[1,2]

思路： 创建临时指针 用来接收 head

var deleteDuplicates = function(head) {
let list = head
while(list && list.next) {
if(list.val === list.next.val){
list.next = list.next.next
}else {
list = list.next
}
}
return head
};

```js
var deleteDuplicates = function (head) {
  let slow = head;
  let fast = head;
  if (head === null) return null;

  while (fast && fast.next) {
    if (fast.val !== fast.next.val) {
      slow.next = fast.next;
      slow = slow.next;
    }

    fast = fast.next;
  }
  slow.next = null;
  return head;
};
```

# 反转链表

// 创建临时值 let pre = next

// 循环 当前指针 while(cur)

// 将当前指针的 next 缓存 let next = cur.next
// 将当前指针的 next 指向 pre cur.next = pre
// 修改 pre 值 为 当前值 为了下一次指针指向 pre = cur
// 修改 cur 值为 下一个 cur = next

return pre

```js
var reverseList = function (head) {
  return resvers(head, null);
};

function resvers(cur, pre) {
  if (cur == null) return pre;

  let temp = cur.next;
  cur.next = pre;

  return resvers(temp, cur);
}
```

# 相交链表

两种思路：
第一种：用 set 。add 存放数据
另一个 set。has

第二种： 我走过你走的路
a+b+c
c+b+a
while(pa !== pb)
pa = pa == null ? headB : pa.next
pb 同理

    return pa

# 环形链表判断

思路： 第一种 添加 target
第二种 set
\*\* 第三种 快慢指针 (快的走两步，慢的一步)
let a = head
let b = head.nex

      while( a!=b ) {
          if(a == bull || a.next == null) {
            return false
          }

          b = b.next
          a= a.next.next
      }

# 移除链表元素

// 需要创建前驱节点
let duuy = new ListNode()
duuy.next = head
let cur = duuy
while(cur.next) {
if(cur.next.val == val) {
cur.next = cur..next.next
} else {
cur = cur.next
}
}

# 链表中倒数第 k 个节点

    // 双指针
    // 第一遍 遍历 确定好 双指针的 距离
    // 第二遍 遍历到 fast 为 null
    // 返回 slow

    // 顺序查找
    // 第一遍确定 length
    // 第二遍 遍历到。 len - k
    // 返回 cur

# 从尾到头打印链表

arr.unshift()

# 链表的中间结点

// 快慢指针
// 快的走两步 ，慢的走一步 这样当快的走到头 慢的就是中间
// 妙

# 回文链表

// 思路：
// 用数组存放数据
// 双指针遍历数组
// => for(let i = 0, j = arr.length -1; i <= j ; i++ ,j --){

# 两数相加

// 思路：
就是不断相加 记录 和 10 取余数
除以 10 是 累加值

需要注意的细节挺多的

# 删除链表的倒数第 N 个结点

双指针

需要注意的 就是

slow.next = slow.next.next 这块 怎么更好的判断一下

todo: 需要重新做一下

# 两两交换链表中的节点

用迭代的方法
创建虚拟节点

将两个节点位置互换

const node1 = cur.next;
const node2 = cur.next.next;

cur.next = node2;
node1.next = node2.next;
node2.next = node1;

cur = node1;

// 用递归的方法还需要在研究

# 删除排序链表中重复数据

创建虚拟节点

然后 双层遍历

双层遍历之后

第一层 遍历 是

todo: 需要在做一遍

# 分割链表

创建两个链表

遍历当前链表

一个 small，一个 big 链表

# LRU 缓存

get
put

获取的时候更新

put 的时候 先 set

# 二叉树展开为链表

二叉树展开为链表

先通过 list 存放正常顺序的节点 root

然后 在遍历 list 就能访问 root
边遍历 修改的就是 root
for(let i =1 ;i < list.length ; i++) {
let pre = list[i-1], cur = list[i]
pre.right = cur
pre.left = null
}

todo: 还有其他做法 还需要在做一遍

# 合并有序链表

就是 创建虚拟节点
let dummy = new ListNode()
let cur = dummy

然后循环两个链表

最后 需要 判断 if(l1) cur.next = l1
if(l2) cur.next = l2

# 单链表的分解

输入：head = [1,4,3,2,5,2], x = 3
输出：[1,2,2,4,3,5]

给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。

你应当 保留 两个分区中每个节点的初始相对位置。

** 合并链表的反向实现 **

1. 创建两个虚拟节点，创建两个指针，创建一个临时指针

2. 遍历链表： ** 重点是当前节点遍历完成之后，需要将当前节点的 next 指向 null，否则会出现环形链表 **

总结： 创建两个链表，创建虚拟节点，遍历的时候 需要将当前节点的 next 指向 null

# 链表中间节点

# 删除链表的倒数第 N 个结点

都是快慢指针 进行处理

// lru 算法
