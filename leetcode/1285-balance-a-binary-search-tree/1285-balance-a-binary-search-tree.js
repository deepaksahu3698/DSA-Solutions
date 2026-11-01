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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
     
     let arr =[]
     inorder(root)
     function inorder(root){
      if(root ==  null) return
     
      inorder(root.left)
      arr.push(root.val)
      inorder(root.right)

     }

     let l =0
     let r = arr.length -1

     function bbst(arr,l,r){
     if(l>r) return null
     
     let mid = Math.floor((l+r)/2)
     let root = new TreeNode(arr[mid])
     root.left = bbst(arr,l,mid-1)
     root.right = bbst(arr,mid +1,r)
     return root
     }
  return bbst(arr,l,r)


};