/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
   let l=0,r=0,ans =0 ,count =0

   while(r<nums.length){
    if(nums[r]==0){
        count ++
    }
    
    if(count<=k){
        ans = Math.max(ans,r-l+1)
    }
    while(count >k){
        if(nums[l]==0)
        {
            count --
        }
        l++
    }

    r++
   }
   return ans
};