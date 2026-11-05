/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
     if(nums.length == 0) return 0
    nums = nums.sort((a,b)=>a-b)
    let max =0
   

 for(let i =1;i<=nums.length-1;i++){

    max = Math.max(max,nums[i]-nums[i-1])
 }
 return max
};