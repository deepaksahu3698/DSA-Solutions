/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    

    let ans =[]
    let k = 2
while(k>0){
    for(let i = 0;i < nums.length;i++){
     ans.push(nums[i])
    }
    k--
}
return ans
    
};