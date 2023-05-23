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
