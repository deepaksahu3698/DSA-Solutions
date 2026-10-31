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
var countNodes = function(root) {
    if( root == null) return 0
 
   let lh =0,rh =0
   let left = root 
   let right = root
   while(left != null){
    left = left.left
    lh++
   }
   while( right != null){
    right = right.right
    rh++
   }
    if (lh === rh) {
        return Math.pow(2, lh) - 1;
    }

    return 1 + countNodes(root.left) + countNodes(root.right);
  
};