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
var rightSideView = function(root) {
    if(root == null) return []

    let ans =[]
    let queue = [root]

    while(queue.length != 0){

        let size = queue.length
        
        let arr =[]
      while(size >0){
       let node = queue.shift()
        arr.push(node.val)
        if(node.left !=null){
        queue.push(node.left)
      }
      if(node.right != null){
        queue.push(node.right)
      }
        size --
      }
      ans.push(arr[arr.length-1])

      
       
}
return ans
    
};