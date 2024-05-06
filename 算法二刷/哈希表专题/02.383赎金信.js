/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let map = new Map();
  for(let i = 0; i < magazine.length; i++) {
    map.set(magazine[i], map.get(magazine[i]) ? map.get(magazine[i]) + 1 : 1);
  }
  for(let i = 0; i < ransomNote.length; i++) {
    if(!map.has(ransomNote[i]) || map.get(ransomNote[i]) === 0) {
      return false;
    }
    map.set(ransomNote[i], map.get(ransomNote[i]) - 1);
  }
  return true;
};
console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));