/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
     if (head === null || head.next === null) {
        return head;
    }
    let slow = head
    let fast = head.next
    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }

    let right = slow.next
    slow.next = null
    let left = sortList(head)
    right = sortList(right)
    return merge(left,right)

};
 function merge(left,right){
    let curr = new ListNode(0)
    let dummy = curr
    while(left !== null && right !==null){
        if(left.val <=right.val){
            curr.next= left
            left = left.next
        }
        else{
            curr.next = right
            right = right.next
        }
         curr = curr.next
      
    }

      if( left != null){
            curr.next= left
        }
        if(right != null){
            curr.next = right
        }
    return dummy.next

 }