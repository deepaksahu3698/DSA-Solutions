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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) return [];
    let queue = [root]
    let ans =[]

    while(queue.length !=0){

        let size = queue.length
        let i = 0
         let arr=[]
        while(i<size){
       let temp = queue.shift()
       arr.push(temp.val)
       if(temp.left !== null){
         queue.push(temp.left)
         }
         if(temp.right !== null){
         queue.push(temp.right)
         }
         i++
        }         
         ans .push(arr)
       
    }
    return ans
};