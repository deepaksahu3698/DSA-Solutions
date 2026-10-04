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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let op =[]
    perOrder(root)
    function perOrder(root){

        if(root == null) return null
        op.push(root.val)
        perOrder(root.left)
        perOrder(root.right)
    }
    
    return op
};