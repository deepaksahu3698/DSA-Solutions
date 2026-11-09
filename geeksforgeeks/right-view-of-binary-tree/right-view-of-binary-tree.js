/*
class Node {
    constructor(val) {
        this.data = val;
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
    rightView(root) {
        // code here
        let arr =[]
        right(root,0)
        
        function right(root,hd){
            if(root == null) return null

            if(hd == arr.length)
            {
                arr.push(root.data)
            }
            right(root.right,hd+1)
            right(root.left,hd+1)

        }
        return arr
    }
}