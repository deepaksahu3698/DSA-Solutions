/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
    maxSubarraySum(arr, k) {
        // code here
        let i =0,j =0,res = 0,sum =0
        
        // while(j<arr.length){
        //     sum +=arr[j]
        
        //     if(j -i+1 == k){
        //         res =Math.max(res,sum)
        //         sum -=arr[i]
        //         i++
        //     }
        //     j++
        // }
        // return res
        
        while(j<arr.length){
            sum += arr[j]
           if(j-i+1 ==k){
               res = Math.max(res,sum)
               sum -=arr[i]
               i++
           }
           j++
        }
        return res
    }
}
