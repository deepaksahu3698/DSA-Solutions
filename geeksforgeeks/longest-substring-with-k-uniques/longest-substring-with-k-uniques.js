/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */
class Solution {
    longestKSubstr(s, k) {
        // code here
         let map = new Map()
        let r =0,l =0
        let maxLen = -1
        
        while(r<s.length){
            if(map.has(s[r])){
                map.set(s[r],map.get(s[r])+1)
            }
            else{
                map.set(s[r],1)
            }
            
            while (map.size > k) {
                          map.set(s[l], map.get(s[l]) - 1);

                          if (map.get(s[l]) === 0) {
                              map.delete(s[l]);
                          }

                          l++;
                      }
           
            if(map.size == k){
                
                maxLen =Math.max(maxLen,r-l+1)
              
            }
            
            r++
        }
        return maxLen
    }
}
