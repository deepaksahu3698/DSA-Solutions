/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    // let count = 0
    // let blob = Array(n).fill(false)
    // for(let i =1;i<=n;i++){
    //     for(let j =i;j<=n;j+=i){
    //       blob[j-1] = !blob[j-1]
    //     }
    // }
    // for(let i =0;i<blob.length;i++){
    //     if(blob[i] ==  true){
    //         count ++
    //     }
    // }
    // return count
    return Math.floor(Math.sqrt(n))
    
};