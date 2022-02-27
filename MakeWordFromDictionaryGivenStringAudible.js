//find word from string
var dictionary = ["i", "am", "a", "cat",
  "man", "mango", "icecream", "and",
  "go", "i", "like", "ice", "cream"
]

// returns true if the word can be segmented into parts such 
// that each part is contained in dictionary 
function wordBreak(word) {
  var size = word.length;
  console.log("checking for word " + word + " size is " + size);
  // base case 
  if (size == 0)
    return true;

  //else check for all words 
  for (var i = 1; i <= size; i++) {
    // Now we will first divide the word into two parts , 
    // the prefix will have a length of i and check if it is  
    // present in dictionary ,if yes then we will check for  
    // suffix of length size-i recursively. if both prefix and  
    // suffix are present the word is found in dictionary. 
    var indOf = dictionary.indexOf(word.substring(0, i));
    if (indOf > -1) {
      console.log("found " + word.substring(0, i));
      var subStr = word.substring(i, size);
      if (wordBreak(subStr)) return true;
    } 
  }

  // if all cases failed then return false 
  return false;
}
console.log(wordBreak("iamacatamice"));