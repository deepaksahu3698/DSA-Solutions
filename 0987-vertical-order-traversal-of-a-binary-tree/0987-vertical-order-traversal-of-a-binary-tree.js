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
       if (root === null) return [];
    let queue = [[root,0,0]]
    let map = new Map()

    while(queue.length !=0){
       
    
    let [value,row,hd] = queue.shift()
    
 if (!map.has(hd)) {
    map.set(hd, [[row, value.val]]);
} else {
    map.get(hd).push([row, value.val]);
}
    if(value.left != null) queue.push([value.left,row+1,hd-1])
    if(value.right != null) queue.push([value.right,row+1,hd+1])


    }
const sortedKeys = [...map.keys()].sort((a, b) => a - b);
    for(const key of sortedKeys){
      let k = map.get(key)
    k.sort((a,b)=>{
  
 if (a[0] !== b[0]) {
        return a[0] - b[0];
    }
    return a[1] - b[1];

    })
    let arrr =[]
    for(const op of k){
arrr.push(op[1])
    }

    ans.push(arrr)


    }
    return ans
};