/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    
    let res =[]
    let st =[]
    let ind =[]

    for(let i = temperatures.length -1;i>=0;i--){

       while(st.length >0 &&  temperatures[i]>=st[st.length -1]){
        st.pop()
        ind.pop()
       }
   
        if(st.length ==0){
            res.push(0)
        }
        else{
            res.push(ind[ind.length -1] - i)
        }
        st.push(temperatures[i])
        ind.push(i)
    }
    return res.reverse()
};