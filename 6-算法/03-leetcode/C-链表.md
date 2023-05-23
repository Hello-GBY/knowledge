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
