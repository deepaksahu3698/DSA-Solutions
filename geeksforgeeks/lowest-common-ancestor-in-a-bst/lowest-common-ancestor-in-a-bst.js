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
         if( root == n1 || root == n2 || root == null){
            return root
        }
        let leftNode = this.findLCA(root.left, n1, n2)
        let rightNode = this.findLCA(root.right, n1, n2)
        
        if( leftNode == null) return rightNode
        if( rightNode == null) return leftNode
         return root
    }
}