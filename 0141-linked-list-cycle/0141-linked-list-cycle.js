/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let mp = new Map()
    let nH = head

    while(nH !== null){
         if (mp.has(nH)) {
            return true;
        }

        mp.set(nH, true);
        nH = nH.next;
    }
    return false
};