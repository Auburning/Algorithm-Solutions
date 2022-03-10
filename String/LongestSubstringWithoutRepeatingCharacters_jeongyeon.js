
var lengthOfLongestSubstring = function(s) {
    let result=0;
    let sum ='';
    for (let i=0; i<s.length; i++){
        let sum = s[i];
        if(s.length == 1) return 1;
        if(i != s.length-1){
            for (let j=i+1; j< s.length ; j++){
                if(sum.indexOf(s[j]) == -1){
                    sum+=s[j];
                }
                else break;
            }
            if(sum.length > result) result = sum.length;
        }
    }
    return result;
};