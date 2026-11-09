class Solution {
    firstNegInt(arr, k) {
        // code here
        
        
        let start =0, end =0
        let ans =[]
        let queue =[]
        
        
        while(end<arr.length){
            
            
            if(arr[end]<0){
                queue.push(arr[end])
            }
            if(end -start +1 ==k){
                
                if(queue.length !=0){
                    ans.push(queue[0])
                }
                else{
                    ans.push(0)
                }
                
                if(arr[start]<0){
                    queue.shift()
                }
                start++
                 
            }

            end++
            }
           
             return ans
        }
       
    
}