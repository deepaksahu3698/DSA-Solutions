/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
     let sum =0
    let maxsum = -Infinity

    for(let i =0;i<nums.length;i++){

     sum +=nums[i]
     maxsum = Math.max(sum,maxsum)
     if(sum<0){
          sum =0
     }
    }
    return maxsum
};