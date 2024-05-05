/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  let sMap = new Map();
  let tMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (sMap.has(s[i])) {
      sMap.set(s[i], sMap.get(s[i]) + 1);
    } else {
      sMap.set(s[i], 1);
    }
  }
  for (let i = 0; i < t.length; i++) {
    tMap.set(t[i], (tMap.get(t[i]) ? tMap.get(t[i]) : 0) + 1);
  }
  if(sMap.size !== tMap.size) return false;
  for (let [key, val] of sMap) {
    if (tMap.get(key) !== val) return false;
  }
  return true;
};
console.log(isAnagram(s = "anagram", t = "nagaram"))
console.log(isAnagram(s = "rat", t = "car"))

// 优化，只用一个哈希表
var isAnagram2 = function(s, t) {
  if(s.length !== t.length) return false;
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (map.has(t[i])) {
      map.set(t[i], map.get(t[i]) - 1);
    } else {
      map.set(t[i], 1);
    }
  }
  for (let [key, val] of map) {
    if (val !== 0) return false;
  }
  return true;
}