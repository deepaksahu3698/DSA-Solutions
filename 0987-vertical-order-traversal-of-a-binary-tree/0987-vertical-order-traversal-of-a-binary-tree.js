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
var verticalTraversal = function(root) {
    
    let ans =[]
    let queue =[[root,0,0]]
    let map = new Map()
    while(queue.length !=0){

    let [node,row,hd] = queue.shift()
     
     if(!map.has(hd)){
        map.set(hd,[])
     }
     
     map.get(hd).push([row,node.val])
    

     if(node.left !==null){
         queue.push([node.left,row+1,hd-1])
     }
     if(node.right != null){
        queue.push([node.right,row+1,hd+1])
     }

    }

    let sortedkey = [...map].sort((a,b)=>a[0]-b[0])
    for(const [hd,node] of sortedkey){

       node.sort((a,b)=>{
       if(a[0] != b[0]){
        return a[0]-b[0]
       }
       return a[1]-b[1] })
       let cvalue = node.map(a=>a[1])
       ans.push(cvalue)

    
    }
    return ans


};