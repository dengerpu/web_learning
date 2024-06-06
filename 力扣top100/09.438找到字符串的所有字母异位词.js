/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  // 滑动窗口的思想
  let sLen = s.length;
  let pLen = p.length;
  if(sLen < pLen) return [];
  let res = [];
  let SCount = new Array(26).fill(0);
  let PCount = new Array(26).fill(0);
  for(let i = 0; i < pLen; i++) {
      SCount[s[i].charCodeAt() - 'a'.charCodeAt()]++;
      PCount[p[i].charCodeAt() - 'a'.charCodeAt()]++;
  }
  if(SCount.toString() === PCount.toString()) {
      res.push(0);
  }
  // 滑动窗口
  for(let i = 0; i < sLen - pLen; i++) {
      // 窗口右移，删去左边第一个元素
      SCount[s[i].charCodeAt() - 'a'.charCodeAt()]--;
      SCount[s[i + pLen].charCodeAt() - 'a'.charCodeAt()]++;
      if(SCount.toString() === PCount.toString()) {
          res.push(i+1);
      }
  }
  return res;
};