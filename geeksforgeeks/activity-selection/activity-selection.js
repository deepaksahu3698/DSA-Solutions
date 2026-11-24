/**
 * @param {number[]} start
 * @param {number[]} finish
 * @returns {number}
 */

class Solution {
    activitySelection(start, finish) {
        // code here
        let arrPair = []
        for( let i =0;i<start.length;i++){
            arrPair.push([finish[i],start[i]])
        }
        arrPair = arrPair.sort((a,b)=>a[0]-b[0])
        let cnt =1
        let finshTime = arrPair[0][0]
        for(let j=1;j<start.length;j++){
            if(arrPair[j][1]>finshTime){
                cnt++
                finshTime = arrPair[j][0]
            }
        }
        return cnt
    }
}