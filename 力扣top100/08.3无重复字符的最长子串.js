/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let set = new Set();
  let rk = -1;
  let maxCount = 0;
  for(let i = 0; i < s.length; i++) {
      if(i != 0) {
          set.delete(s[i-1]); // 窗口右移，删除第一个字符
      }
      while(rk + 1 < s.length && !set.has(s[rk + 1])) {
          set.add(s[rk + 1]);
          rk++;
      }
      maxCount = Math.max(maxCount, rk - i + 1);
  }
  return maxCount;
};