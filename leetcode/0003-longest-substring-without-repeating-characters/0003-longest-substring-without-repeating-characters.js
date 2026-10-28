/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let r =0,l=0,len =0
    let mp = new Map()
    while(r<s.length){
        if(mp.has(s[r])){
            l = Math.max(l,mp.get(s[r])+1)
        }
        mp.set(s[r],r)
        len = Math.max(len,r - l + 1)
        r++
    }
    return len
};