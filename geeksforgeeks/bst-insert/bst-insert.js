/* Structure of a Binary Search Tree node
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
} */

/**
 * @param {Node} root
 * @param {number} key
 * @return {Node}
 */

class Solution {
    insert(root, key) {
        // code here
        
        if( root == null){
            
            let temp = new Node(key)
            return temp
        }
        
        if(root.data <key){
            root.right = this.insert(root.right, key) 
        }
        if(root.data >key){
            root.left = this.insert(root.left, key) 
        }
        return root
        
    }
}