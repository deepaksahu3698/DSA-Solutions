/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
   if(head == null || head.next == null){
    return true
   }
   //1 find the middle
   let slow = head
   let fast = head
   while(fast != null && fast.next !== null){

    slow = slow.next
    fast = fast.next.next
   }

   //2 reverse the second part
   let perv = null
   let curr = slow
   let next = null
   while(curr != null){
    next = curr.next
    curr.next =perv
    perv = curr
    curr = next
   }

   //3 compare two part

     let left = head
     let right = perv
     while( right != null){
        if(left.val != right.val){
            return false
        }
        left = left.next
        right = right.next
     }
     return true

    
};