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
 * @return {boolean}
 */
var isBalanced = function(root) {

  function height(root){

    if (root  == null) return 0

    let lc = height(root.left)
    let rc = height(root.right)


    if( lc == -1 || rc == -1){
        return -1
    }

    if(Math.abs(lc -rc) >1) return -1

    return Math.max(lc,rc) +1

  }

  return height(root) != -1
  

};