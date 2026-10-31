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
var isValidBST = function(root) {
//      let arr =[]
//     preorder(root,arr)
//     function preorder(root,arr){
//     if(root == null) return
    
//      preorder(root.left,arr)
//      arr.push(root.val)
//       preorder(root.right,arr)
// }
// for( let i =1;i<arr.length;i++){
//     if(arr[i]<=arr[i-1]) return false
// }
// return true

    let max = Infinity
    let min = - Infinity

   

    function valid(root,min,max){
      if(root == null) return true

        if(!(root.val <max &&  root.val>min)){
            return false
        }

        return valid(root.left,min,root.val) && valid(root.right,root.val,max)
    }
    return  valid(root,min,max)
};