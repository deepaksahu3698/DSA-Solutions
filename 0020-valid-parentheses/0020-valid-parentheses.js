/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let st =[]
    for(let i =0;i<s.length;i++){
        if(s[i]=="(" || s[i]=="{" || s[i]=="["){
            st.push(s[i])
        }
        else if(s[i]==")" || s[i]=="}" || s[i]=="]"){
             if (st.length == 0) {
                return false;
            }
            let top = st[st.length-1]

            if(s[i]==")" && top == "("){
                st.pop()
            }
            else if(s[i]=="}" && top == "{"){
                st.pop()
            }
           else if(s[i]=="]" && top == "["){
                st.pop()
            }
            else{
                return false
            }
            
    }
        
    }
    return st.length == 0
};