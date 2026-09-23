/* Linked List Node Structure
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
} */

/**
 * @param {Node} head
 * @returns {boolean}
 */
class Solution {
    detectLoop(head) {
        // code here
        // let map = new Map()
        // let temp = head
        
        // while(temp != null){
        //     if(map.has(temp)){
        //         return true
        //     }
            
        //     map.set(temp)
        //     temp = temp.next
            
        // }
        // return false
        let fast = head
        let slow = head
        while(fast != null && fast.next != null){
            
           
            slow =slow.next
            fast = fast.next.next
            
             if(slow == fast){
                return true
            }
            
        }
        return false
        
        
    }
}