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
var reverseList = function(head) {
    let curr = head
    let perv = null;
    let next = null
    while(curr != null){

        next = curr.next
        curr.next = perv
        perv = curr
        curr = next

    }
    return perv
};