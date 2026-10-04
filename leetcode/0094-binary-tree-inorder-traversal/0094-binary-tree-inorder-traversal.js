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
var inorderTraversal = function(root) {
    let arr =[]
    inOrder(root,arr)
    function inOrder(root){
    if(root == null) return
    
     inOrder(root.left)
     arr.push(root.val)
      inOrder(root.right)
}
return arr
};

