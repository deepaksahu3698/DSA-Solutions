/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // let maxArea =0

    // for(let i =0;i<height.length;i++){

    // for ( let j =i+1;j<height.length;j++){

    //     let width = j-i
    //     let heght = Math.min(height[i],height[j])
    //     let area = width * heght
    //     maxArea = Math.max(maxArea,area)
    // }

    // }

    // return maxArea



let left =0
let right = height.length -1
let max =0

while(left <right){

 let width = right - left
 let ht = Math.min(height[left],height[right])
  max = Math.max(max, width * ht)

  if(height[left]<height[right]){
    left++
  }
  else{
    right--
  }

}
return max




};