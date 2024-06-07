/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let count = 0;
  for(let i = 0; i < nums.length; i++) {
      let sum = 0;
      for(let end = i; end >= 0; end--) {
          sum += nums[end];
          if(sum === k) {
              count++;
          }
      }
  }
  return count;
};