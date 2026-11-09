/*
Definition for Node
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root
 * @returns {number[]}
 */

class Solution {
    boundaryTraversal(root) {
        // code here
        let arr =[]
        if(root == null) return []
        
       function isLeaf(root){
            return root.left == null && root.right == null
        
           }
           
           arr.push(root.data)
           
           function left(node){
               if(node == null || isLeaf(node)) {
                   return node
               }
               arr.push(node.data)
               if(node.left !=null){
                    left(node.left);
               }else{
                   left(node.right)
               }
           }
           
          function addLeaf(node){
              
              if(node == null) return node
              
              if(isLeaf(node)){
                  arr.push(node.data)
                  return
              }
              addLeaf(node.left)
              addLeaf(node.right)
          }
          
          function right(node){
               if(node == null || isLeaf(node)) {
                   return node
               }
               
               if(node.right !=null){
                    right(node.right);
               }else{
                   right(node.left)
               }
               arr.push(node.data)
           }
           
           left(root.left)
           
           if(!isLeaf(root)){
               addLeaf(root)
           }
           right(root.right)
           return arr
       
    }
}