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
var maxDepth = function(root) {

    postOrder(root)

    function postOrder(root){
     if(root == null) {
            return 0;
        }

        let lt = postOrder(root.left);
        let rt = postOrder(root.right);

        return Math.max(lt, rt) + 1;
    }


    return postOrder(root);
    
    
};