/**
 * @param {Node} root
 * @returns {number[]}
 */

/*
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
} */

class Solution {
    topView(root) {
        // code here
        if(root == null) return []
        let ans =[]
        let queue = [[root,0]]
        let map = new Map()
        while(queue.length != 0){
            
            
            let [node ,hd] =queue.shift()
            
           
            if(node.left != null){
                queue.push([node.left,hd-1])
            }
             if(!map.has(hd)){
                map.set(hd,node.data)
            }
            if(node.right != null){
                queue.push([node.right,hd+1])
            }
        }
        
       let keys = [...map.keys()].sort((a, b) => a - b);

       for (let kp of keys) {
           ans.push(map.get(kp));
       }
        return ans
    }
    
}