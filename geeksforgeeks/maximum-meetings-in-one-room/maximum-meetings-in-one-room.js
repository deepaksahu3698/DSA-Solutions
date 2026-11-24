class Solution {
    maxMeetings(s, f) {
        // code here
        let pairArr = []
        let ans =[]
        let map =new Map()
        
        for(let i =0;i<s.length;i++){
            pairArr.push([f[i],s[i]])
        }
        
        for(let j =0;j<pairArr.length;j++){
            map.set(pairArr[j],j+1)
        }
        pairArr = pairArr.sort((a,b)=>a[0]-b[0])
        let finishTime = pairArr[0][0]
        ans.push(map.get(pairArr[0]))
        for(let k =1;k<pairArr.length;k++){
            if(pairArr[k][1] >finishTime){
                ans.push(map.get(pairArr[k]))
                finishTime = pairArr[k][0]
            }
        }
        ans.sort((a, b) => a - b);
        
        return ans
    }
}