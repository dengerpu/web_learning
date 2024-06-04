/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let set = new Set(nums);
  let maxCount = 0;
  for(let num of set.values()) {
      if(!set.has(num - 1)) {
          let count = 1;
          let currentNum = num;
          while(set.has(currentNum + 1)) {
              currentNum += 1
              count += 1;
          }
          maxCount = Math.max(maxCount, count);
      }
  }
  return maxCount;
};