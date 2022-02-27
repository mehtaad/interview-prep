/**
 * Date 04/25/2016
 * @author Tushar Roy
 *
 * Insert/delete/search into trie data structure
 *
 * Reference
 * https://en.wikipedia.org/wiki/Trie
 */


    
    var root = {
        endOfWord:false,
        children:{}
    }
    /**
     * Iterative implementation of insert varo trie
     */
    var insert = function( word) {
        var current = root;
        for (var i = 0; i < word.length; i++) {
            var ch = word[i];
            var node = current.children[ch];
            if (node == null) {
                node = {
                    endOfWord:false,
                    children:{}
                };
                current.children[ch]= node;
            }
            current = node;
        }
        //mark the current nodes endOfWord as true
        current.endOfWord = true;
    }

    /**
     * Recursive implementation of insert varo trie
     */
    var insertRecursive = function( word) {
        insertRecursive1(root, word, 0);
    }


    var  insertRecursive1 = function(current,  word,  index) {
        if (index == word.length) {
            //if end of word is reached then mark endOfWord as true on current node
            current.endOfWord = true;
            return;
        }
        var ch = word[index];
        var node = current.children[ch];

        //if node does not exists in map then create one and put it varo map
        if (node == null) {
            node = {
                endOfWord:false,
                children:{}
            };
            current.children[ch]= node;
        }
        insertRecursive1(node, word, index + 1);
    }

    /**
     * Iterative implementation of search varo trie.
     */
    var  search = function( word) {
        var current = root;
        for (var i = 0; i < word.length; i++) {
            var ch = word[i];
            var node = current.children[ch];
            //if node does not exist for given var then return false
            if (node == null) {
                return false;
            }
            current = node;
        }
        //return true of current's endOfWord is true else return false.
        return current.endOfWord;
    }

    /**
     * Recursive implementation of search varo trie.
     */
    var  searchRecursive = function( word) {
        return searchRecursive1(root, word, 0);
    }
    var  searchRecursive1 = function(node, word, index) {
        if (index == word.length) {
            //return true of current's endOfWord is true else return false.
            return current.endOfWord;
        }
        var ch = word[index];
        var node = current.children[ch];
        //if node does not exist for given var then return false
        if (node == null) {
            return false;
        }
        return searchRecursive1(node, word, index + 1);
    }

    /**
     * Delete word from trie.
     */
    var delete = function(word) {
        delete1(root, word, 0);
    }

    /**
     * Returns true if parent should delete the mapping
     */
    var  delete1 = function(node, word, index) {
        if (index == word.length) {
            //when end of word is reached only delete if currrent.endOfWord is true.
            if (!current.endOfWord) {
                return false;
            }
            current.endOfWord = false;
            //if current has no other mapping then return true

            return Object.keys(current.children).length == 0;
        }
        var ch = word[index];
        var node = current.children[ch];
        if (node == null) {
            return false;
        }
        var shouldDeleteCurrentNode = delete1(node, word, index + 1);

        //if true is returned then delete the mapping of varacter and trienode reference from map.
        if (shouldDeleteCurrentNode) {
            delete current.children[ch];
            //return true if no mappings are left in the map.
            return Object.keys(current.children).length == 0;
        }
        return false;
    }
