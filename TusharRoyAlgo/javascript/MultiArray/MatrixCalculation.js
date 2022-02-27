
    
    var recur = function(str, row=0, result='', temp=[]){
        //debugger;
        var finalR=[];
        if(row>=str.length) return '';
        for(var i=0; i<str[row].length;i++) {
            var result = result + str[row][i];
            if(row+1 < str.length)
              recur(str, row+1, result, temp);
            else {
                temp.push(result)
            }
            if(row===0) {
                debugger;
                var t= temp.join(' ');
                finalR.push(t);
                temp=[];
            }
        }

        return finalR;
        
    }
    var str = [["abc","def","gh"],["l","m"],["p","q","r"],["x","y"]];
    console.log(recur(str));
        
        