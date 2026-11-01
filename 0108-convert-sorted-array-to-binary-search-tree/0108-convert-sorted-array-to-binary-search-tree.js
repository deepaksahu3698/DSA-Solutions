/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
      let l =0
    let r = nums.length -1
   
    function checkBBSt(nums,l,r){
        if(l>r) return null

    let mid = Math.floor((r+l)/2)

    let root = new TreeNode(nums[mid])
    root.left = checkBBSt(nums,l,mid-1)
    root.right = checkBBSt(nums,mid+1,r)
    return root
    }
      return checkBBSt(nums,l,r)
    
};