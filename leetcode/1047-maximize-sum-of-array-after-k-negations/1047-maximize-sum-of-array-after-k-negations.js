/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    nums = nums.sort((a,b)=> a-b)
    let i =0
    while(i<nums.length && nums[i] <0 &&k>0){
        nums[i] = -nums[i]
        i++
        k--
    }
    let sum =0
    let min = Infinity
    for(let j =0;j<nums.length ;j++){
        sum +=nums[j]
        min = Math.min(min,nums[j])
    }

if(k %2 ==1){
    sum -= 2*min
}
return sum
};