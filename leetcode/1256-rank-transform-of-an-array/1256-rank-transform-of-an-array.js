/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let rank =0
    let ans = new Array(arr.length)
    let prev =null
    let minh = new MinHeap(pair => pair[0])
    for( let i =0;i<arr.length;i++){
        minh.push([arr[i],i])
    }
    while(minh.size() !=0){

        let [val,ind] = minh.pop()
         if(prev !== val){
            rank++
            prev = val
         }
         ans[ind] = rank
    }
    return ans
};