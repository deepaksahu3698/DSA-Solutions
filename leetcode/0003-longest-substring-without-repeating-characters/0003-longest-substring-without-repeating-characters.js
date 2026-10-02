/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let r =0,l =0,len =0
    let map = new Map()
    while(r<s.length){
       if(map.has(s[r])){
        l = Math.max(l,map.get(s[r])+1)
       }
       map.set(s[r],r)
       len = Math.max(len,r-l+1)
       r++
    }
    return len
};