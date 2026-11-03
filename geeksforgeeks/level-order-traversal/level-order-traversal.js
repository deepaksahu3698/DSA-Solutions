/**
 * @param {Node} root
 * @returns {number[]}
 */

/* Structure of Binary Tree Node
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}*/

class Solution {
    levelOrder(root) {
        // code here
        let queue =[root]
        let ans =[]
        
        while(queue.length != 0){
            
            let temp = queue.shift()
            ans.push(temp.data)
            if(temp.left !== null)
            {
                queue.push(temp.left)
                
            }
            
            if(temp.right !== null){
                queue.push(temp.right)
            }
            
        }
        return ans
    }
}