/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let count = 0
    let temp = head
    while(temp !== null){
        count ++ 
        temp = temp.next
    }
    let nFS = count - n
    if(nFS ==0){
        return head.next
    }
   let temp1 = head
    for(let i =0;i<count;i++){
        if( i == nFS - 1){
            temp1.next = temp1.next.next
        }
        else{
            temp1 = temp1.next
        }
    }
    return head
};