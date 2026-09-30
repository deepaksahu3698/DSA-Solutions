/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    
 let map = new Map()
  for( let i =0;i<arr.length;i++){
    let rem = ((arr[i] % k) + k) % k;
    if(!map.has(rem)){
        map.set(rem,1)
    }
    else
    {
        
        map.set( rem ,map.get(rem)+1)}
  }
  for(let [rem,count] of map){
    if(rem ==0){
        if(count %2 !==0){
            return false
        }
    }
    else if (2 * rem === k) {
    if (count % 2 !== 0) {
        return false;
    }
}

else {
    let complement = k - rem;

    if (count !== (map.get(complement) || 0)) {
        return false;
    }
}


  }

return true

};