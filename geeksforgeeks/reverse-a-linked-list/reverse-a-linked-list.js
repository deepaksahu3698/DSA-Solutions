/* Structure of Linked List Node
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

/**
 * @param {Node} head
 * @returns {Node}
 */

class Solution {
    reverseList(head) {
        // code here
        let temp = head
        let st =[]
        while(temp !== null){
            st.push(temp)
            temp = temp.next
            
        }
        if(st.length == 0){
            return null;
        }
        
        let newHead = st.pop()
        temp = newHead
        
        while(st.length >0){
            
            let node = st.pop()
            temp.next = node
            temp = node
        }
        temp.next = null
        return newHead
}
}