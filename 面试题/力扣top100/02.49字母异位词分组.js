/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const obj = new Object();
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const arr = new Array(26).fill(0);
    for (let j = 0; j < str.length; j++) {
      arr[str.charCodeAt(j) - 'a'.charCodeAt()]++;
    }
    obj[arr] ? obj[arr].push(str) : obj[arr] = [str];
  }
  return Object.values(obj);
};