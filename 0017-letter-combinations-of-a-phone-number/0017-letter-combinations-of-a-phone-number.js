/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    let arr=[]

    let numMap = new Map([
        ["2", "abc"],
        ["3", "def"],
        ["4", "ghi"],
        ["5", "jkl"],
        ["6", "mno"],
        ["7", "pqrs"],
        ["8", "tuv"],
        ["9", "wxyz"]
    ])

    function backTrack(index,currchar){

        if(index == digits.length){
            arr.push(currchar);
            return
        }
        let letters = numMap.get(digits[index]);
        for (let char of letters) {
            backTrack(index + 1, currchar + char);
        }
    }
    backTrack(0,"")
    return arr


};