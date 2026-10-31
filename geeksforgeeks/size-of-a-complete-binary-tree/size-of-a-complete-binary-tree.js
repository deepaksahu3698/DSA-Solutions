/**
 * @param {Node} root
 * @returns {number}
 */

class Solution {

    countNodes(root) {
        // code here
        if(root == null) return 0
        
        let lc = this.countNodes(root.left)
        let rc = this.countNodes(root.right)
        return lc + rc + 1
    }
}