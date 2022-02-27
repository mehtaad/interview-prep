  /* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * References
 * https://leetcode.com/problems/substring-with-concatenation-of-all-words/
 * @class
 */
const findSubstring = (s, words) => {
  // Sanity check
  if (!words || words.length === 0) return [];

  const m = words.length,
    wordLen = words[0].length,
    patternLen = m * wordLen,
    result = [];

  // Build the word-count hash map
  const map = {};
  for (word of words) map[word] = ~~map[word] + 1;
 
  // Try every possible start position i
  for (let i = 0; i < s.length - patternLen + 1; i++) {
    // Make a copy of the hash map
    const temp = Object.assign({}, map);

    for (let j = i; j < i + patternLen; j += wordLen) {
      const str = s.substr(j, wordLen);
      // Cannot find the word in hash map (words list), try another position
      if (!(str in temp)) break;
      // All the same word str are found, remove it from the hash map
      if (--temp[str] === 0) delete temp[str];
    }

    // We have gone through the whole s and used all our words in the list
    if (Object.keys(temp).length === 0) result.push(i);
  }

  return result;
};
var s = "wordgoodgoodgoodbestword";
var words = ["word", "good", "best", "word"];
console.log(findSubstring(s,words));
