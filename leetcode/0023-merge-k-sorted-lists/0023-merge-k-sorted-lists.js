/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

   let minh = new MinPriorityQueue(pair => pair[0])

   for(let head of lists){
    if(head !== null){
        minh.enqueue([head.val,head])
    }
   }

   let dummy = new ListNode(0)
   let curr = dummy 

    while (!minh.isEmpty()) {

        let [val, node] = minh.dequeue();

        curr.next = node;
        curr = curr.next;

        if (node.next != null) {
            minh.enqueue([node.next.val, node.next]);
        }
    }
    return dummy.next

    
};