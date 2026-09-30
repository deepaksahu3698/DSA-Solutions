/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    let sett = new Set()
    let tempA = headA
    let tempB = headB
    while(tempA != null){
       sett.add(tempA)
        tempA =tempA.next
    }
 while(tempB != null){
    if(sett.has(tempB)){
        return tempB
    }
      
        tempB =tempB.next
    }
};