/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    
    function maxDepth(root){
     if(root == null) {
            return 0;
        }

        let lt = maxDepth(root.left);
        let rt = maxDepth(root.right);

         if (root.left === null) {
            return rt + 1;
        }

        if (root.right === null) {
            return lt + 1;
        }

        return Math.min(lt, rt) + 1;
    }


    return maxDepth(root);
};