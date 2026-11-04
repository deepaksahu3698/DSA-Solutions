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
var minDiffInBST = function(root) {
  let min = Infinity
  let prev = -Infinity

  function distacneeeee(root) {
   if(root == null) return null
 distacneeeee(root.left)
  if (prev !== -Infinity) {
 min = Math.min(min,Math.abs(root.val-prev))

  }

 prev = root.val
 distacneeeee(root.right)
  } 
  distacneeeee(root)
  return min
};