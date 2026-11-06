/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    
       let n = mat.length
    let m = mat[0].length

    let sum =0
    for(let i =0;i<n;i++){

        for(let j=0;j<m;j++){
           if(i==j){
            sum+=mat[i][j]
           }
           else if(i + j == n-1 && i!=j){
            sum+=mat[i][j]
           }

        }
    }
    return sum
};