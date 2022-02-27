package com.varerview.string;

/**
.Given an input string S write a function which returns true if it satisfies S = nT. Basically you have to find if a given string can be represented from a substring by iterating it �n� times. n >= 2
An example would suffice 
Function should return true if
1) S = abab
2) S = abcdabcd
3) S = abcabcabc
4) S = zzxzzxzzx

Function should return false if
1) S = abac
2) S = abcdabbd
3) S = abcabcefg
4) S = zzxzzyzzx
 */
    var matchStr = function(str){
        debugger;
        var kmp = buildKMP(str);
        var index = kmp[str.length-1];
        //reason end is this rather than index+1 because
        //if our string was ababab for KMP we would have index as 4 at str.length-1 and we
        //want end to be 1 rather than 5
        var end = str.length - index-1;
        if(end >= Math.floor(str.length/2)){
            return false;
        }
        var j = end+1;
        var i = 0;
        while(j < str.length){
            if(str[i] != str[j]){
                return false;
            }
            i = (i+1)%(end+1);
            j++;
        }
        
        if(i == 0){
            return true;
        }
        return false;
    }
    
    var buildKMP = function(str){

        var result = new Array(str.length).fill(0);
        
        var i =1;
        result[0] = 0;
        var len =0;
        while(i < str.length){
            if(str[i] == str[len]){
                len++;
                result[i] = len;
                i++;
            }else{
                if(len != 0){
                    len = result[len-1];
                }else{
                    len =0;
                    result[i] = 0;
                    i++;
                }
            }
        }
        return result;
    }
    
    
        
        console.log(matchStr("bababababa".split('')));
    