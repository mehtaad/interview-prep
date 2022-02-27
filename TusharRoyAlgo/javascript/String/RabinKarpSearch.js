

/**
 * Date 09/25/2014
 * @author Tushar Roy
 *
 * Rabin Karp algorith for substring matching.
 *
 * Time complexity in worst case O(n^2)(depends on hash function)
 * Space complexity O(1)
 *
 * References
 * https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm
 */

    var prime = 101;
    //debugger;
    var patternSearch = function(text, pattern){
        var m = pattern.length;
        var n = text.length;
        var patternHash = createHash(pattern, m - 1);
        var textHash = createHash(text, m - 1);
        for (var i = 1; i <= n - m + 1; i++) {
            if(patternHash === textHash && checkEqual(text, i - 1, i + m - 2, pattern, 0, m - 1)) {
                return i - 1;
            }
            if(i < n - m + 1) {
                textHash = recalculateHash(text, i - 1, i + m - 1, textHash, m);
            }
        }
        return -1;
    }
    
    var recalculateHash = function(str, oldIndex, newIndex, oldHash, patternLen) {
        var newHash = oldHash - str[oldIndex].charCodeAt(0);
        newHash = newHash/prime;
        newHash += str[newIndex].charCodeAt(0)*Math.pow(prime, patternLen - 1);
        return newHash;
    }
    
    var createHash = function(str, end){
        var hash = 0;
        for (var i = 0 ; i <= end; i++) {
            hash += str[i].charCodeAt(0)*Math.pow(prime,i);
        }
        return hash;
    }
    
    var checkEqual = function(str1, start1, end1,  str2,  start2,  end2){
        if(end1 - start1 != end2 - start2) {
            return false;
        }
        while(start1 <= end1 && start2 <= end2){
            if(str1[start1] != str2[start2]){
                return false;
            }
            start1++;
            start2++;
        }
        return true;
    }
    
    
        console.log(patternSearch("TusharRoy".split(''), "sharRoy".split('')));
        /*console.log(patternSearch("TusharRoy".split(''), "Roy".split('')));
        console.log(patternSearch("TusharRoy".split(''), "shas".split('')));
        console.log(patternSearch("TusharRoy".split(''), "usha".split('')));
        console.log(patternSearch("TusharRoy".split(''), "Tus".split('')));
    */