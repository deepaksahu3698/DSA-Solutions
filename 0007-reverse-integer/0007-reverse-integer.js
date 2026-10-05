/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let ans =0
    while(x !== 0){
   let rem = x%10
   ans = ans * 10+ rem
   x = Math.trunc(x/10)
    }
    if(
       ans < -2147483648 || ans > 2147483647
    )
    {
        return 0
    }
    return ans

};