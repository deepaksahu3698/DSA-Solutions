/* Structure of Binary Tree Node
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root
 * @returns {number[]}
 */

class Solution {
    leftView(root) {
        // code here
        let arr = []
        left(root,0)
        function left(root,hd){
            if(root == null) return null
            if(hd == arr.length){
                arr.push(root.data)
            }
            left(root.left,hd+1)
            left(root.right,hd+1)
        }
        
        
        return arr
        
    }
}