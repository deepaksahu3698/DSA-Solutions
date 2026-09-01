/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

      let count =0
      let left =0
    let sMap = new Map()

    for(let i =0;i<s.length;i++){
        if(sMap.has(s[i])){
        left = Math.max(left,sMap.get(s[i])+1)
        
        }
        
            sMap.set(s[i],i)
            let len = i- left +1
            count = Math.max(count,len)
    
    }
    return count
    
};