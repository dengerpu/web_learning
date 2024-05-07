/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  // // 采用排序比较的办法
  // let pStr = [...p].sort().join();
  // let len = p.length;
  // let res = [];
  // let arr = [...s];
  // for(let i = 0; i < arr.length; i++) {
  //     let str = arr.slice(i, i + len).sort().join();
  //     if(str === pStr) {
  //         res.push(i);
  //     }
  // }
  // return res;

  // 滑动窗口的思想
  let sLen = s.length, pLen = p.length;
  let res = [];
  if(sLen < pLen) {
      return res;
  }
  let sCount = new Array(26).fill(0);
  let pCount = new Array(26).fill(0);
  for(let i = 0; i < pLen; i++) {
      sCount[s[i].charCodeAt() - 'a'.charCodeAt()]++;
      pCount[p[i].charCodeAt() - 'a'.charCodeAt()]++;
  }
  if(sCount.toString() === pCount.toString()) {
      res.push(0);
  }
  for(let i = 0; i < sLen - pLen; i++) {
      // 窗口右移一位
      sCount[s[i].charCodeAt() - 'a'.charCodeAt()]--;
      sCount[s[i + pLen].charCodeAt() - 'a'.charCodeAt()]++;
      if(sCount.toString() === pCount.toString()) {
          res.push(i+1);
      }
  }
  return res;
};