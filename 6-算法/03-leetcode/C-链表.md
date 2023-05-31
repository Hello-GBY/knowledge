# 合并两个有序链表
// 思路定义一根针 let head = new ListNode() 
                let cur = head
// 循环条件  while(list1 && list2) 
//            if(list1.val ....) 比大小
                cur.next = list
                list = list.next
              反之依然
//          cur = cur.next //指向下一个节点
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


# 反转链表

// 创建临时值 let pre = next

// 循环 当前指针 while(cur)

  //  将当前指针的next 缓存 let next = cur.next
  //  将当前指针的 next 指向 pre  cur.next = pre
  //  修改 pre 值 为 当前值 为了下一次指针指向  pre = cur
  //  修改cur值为 下一个  cur = next

return pre

# 相交链表
两种思路：
第一种：用set 。add 存放数据 
      另一个 set。has

第二种： 我走过你走的路
      a+b+c
      c+b+a
    while(pa !== pb)
      pa =  pa == null ? headB : pa.next
      pb 同理

    return pa

# 环形链表判断
思路： 第一种 添加 target
  第二种 set
  ** 第三种 快慢指针 (快的走两步，慢的一步)
      let a = head
      let b = head.nex

      while( a!=b ) {
          if(b == bull || b.next == null) {
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

# 链表中倒数第k个节点
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
//    用数组存放数据
//  双指针遍历数组 
//    => for(let i = 0, j = arr.length -1; i <= j ; i++ ,j --){


#  两数相加
// 思路：
就是不断相加 记录 和 10 取余数 
除以10 是 累加值

需要注意的细节挺多的

