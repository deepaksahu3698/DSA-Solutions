/* Structure of a Binary Search Tree node
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}; */
class Solution {
    /**
     * @param {Node} root
     * @return {boolean}
     */
    isBST(root) {
        // code here
         let arr =[]
         check(root)
         
         function check(root){
             
             if(root == null) return null
             
             check(root.left)
             arr.push(root.data)
             check(root.right)
         }
        
        for(let i =1;i<=arr.length;i++){
            if(arr[i]<=arr[i-1]){
                return false
            }
        }
        return true
    }
}