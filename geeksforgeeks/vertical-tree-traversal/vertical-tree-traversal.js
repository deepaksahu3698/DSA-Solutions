/* Structure of binary tree node
class Node{
    constructor(val){
        this.data = val;
        this.left = null;
        this.right = null;
    }
}*/

/**
 * @param {Node} root
 * @returns {number[][]}
 */

class Solution {
    verticalOrder(root) {
        // code here
         let ans =[]
            let queue = [[root,0]]
            let map = new Map()

            while(queue.length !=0){
                  if (root === null) return [];

            let [value,hd] = queue.shift()

            if(!map.has(hd)){
                map.set(hd,[value.data])
            }
            else{
                map.get(hd).push(value.data)
            }
            if(value.left != null) queue.push([value.left,hd-1])
            if(value.right != null) queue.push([value.right,hd+1])


            }
        const sortedKeys = [...map.keys()].sort((a, b) => a - b);
            for(const key of sortedKeys){
                ans.push(map.get(key))
            }
            return ans
    }
}