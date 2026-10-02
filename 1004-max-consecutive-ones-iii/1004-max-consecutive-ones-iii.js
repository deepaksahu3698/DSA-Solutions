/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let r =0,l=0,zero =0 ,ans =0

    while( r < nums.length){

         if(nums[r]==0){
            zero++
         }
         if(zero <=k){
            ans = Math.max(ans,r-l+1)
         }
         while(zero >k){
            if(nums[l] ==0){
                zero --
            }
            l++
           
         }
         r++
    }
    return ans
};