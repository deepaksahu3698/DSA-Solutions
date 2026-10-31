/* Structure of a Binary Search Tree node
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root
 * @param {Node} n1
 * @param {Node} n2
 * @returns {Node}
 */

class Solution {
    findLCA(root, n1, n2) {
        // code here
        if( root == null) return null
        
        let curr = root.data
        
        if(n1.data< curr && n2.data < curr){
       return     this.findLCA(root.left, n1, n2)
        }
        if(n1.data> curr && n2.data >curr){
          return  this.findLCA(root.right, n1, n2)
        }
        return root
    }
}