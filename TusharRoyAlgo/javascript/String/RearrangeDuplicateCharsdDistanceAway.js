

/**
 * http://www.geeksforgeeks.org/rearrange-a-string-so-that-all-same-characters-become-at-least-d-distance-away/
 * 
 */
/*class CharCount implements Comparable<CharCount>{
    char ch;
    var count;
    @Override
    public var hashCode() {
        final var prime = 31;
        var result = 1;
        result = prime * result + getOuterType().hashCode();
        result = prime * result + ch;
        return result;
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        CharCount other = (CharCount) obj;
        if (!getOuterType().equals(other.getOuterType()))
            return false;
        if (ch != other.ch)
            return false;
        return true;
    }
    private RearrangeDuplicateCharsdDistanceAway getOuterType() {
        return RearrangeDuplicateCharsdDistanceAway.this;
    }
    
    
    @Override
    public String toString() {
        return "CharCount [ch=" + ch + ", count=" + count + "]";
    }
    @Override
    public var compareTo(CharCount cc) {
        if(this.count >= cc.count){
            return -1;
        }else{
            return 1;
        }
    }
    
}

public boolean rearrangeExactKDistanceAway(input, d){
    PriorityQueue<CharCount> heap = new PriorityQueue<CharCount>();
    Map<Character,vareger> map = new HashMap<Character,vareger>();
    for(var i=0; i < input.length; i++){
        var count = 1;
        if(map.containsKey(input[i])){
            count = map.get(input[i]);
            count++;
        }
        map.put(input[i], count);
        input[i] = 0;
    }
    for(Character ch : map.keySet()){
        CharCount cc = new CharCount();
        cc.ch = ch;
        cc.count = map.get(ch);
        heap.add(cc);
    }
    
    while(heap.size() > 0){
        CharCount cc = heap.poll();
        var i;
        for(i=0; i < input.length && input[i] != 0; i++);
        if(i == input.length){
            return false;
        }
        while(cc.count > 0 && i < input.length){
            input[i] = cc.ch;
            i = i + d;
            cc.count--;
        }
        if(cc.count > 0){
            return false;
        }
    }
    return true;
}

private void getAllFeasibleCharacters(char output[], var k,var pos,Set<Character> allChars){
    for(var i = pos-1; i > pos -k && i >=0; i--){
        allChars.remove(output[i]);
    }
}*/
    
    var rearrangeAtleastkDistanceAway = function(input, k){
        var map = {};
        for(var i=0; i < input.length; i++){
            var count = 1;
            if(map[input[i]])){
                count = map[input[i]].count;
                count++;
            }
            map[input[i]].count=count;
            input[i] = 0;
        }
        return rearrangeAtleastkDistanceAway11(map, input, 0, k);
    }
    
    var rearrangeAtleastkDistanceAway11(charCountMap, output, pos, k){
        if(pos == output.length && Object.keys(charCountMap).length == 0){
            return true;
        }
        var allChars = {};
        for(char ch : charCountMap.keySet()){
            allChars.add(ch);
        }
        getAllFeasibleCharacters(output,k,pos,allChars);
        for(char ch : allChars){
            output[pos] = ch;
            var c = charCountMap.get(ch);
            if(c -1 == 0){
                charCountMap.remove(ch);
            }else{
                charCountMap.put(ch, c-1);
            }
            boolean r = rearrangeAtleastkDistanceAway11(charCountMap, output, pos+1, k);
            if(r){
                return true;
            }
            charCountMap.put(ch, c);
        }
        return false;
    }
    
    var str = "ABBACCCCDD".split(''); 
    var r =rearrangeAtleastkDistanceAway(input, 3);
    if(r){
            console.log(r);
        
    }else{
        console.log("Not possible");
    }
   