/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
var maxSubArray = function(nums) {
  let pre = 0, res = nums[0];
  for(let i = 0; i < nums.length; i++) {
      pre = Math.max(pre + nums[i], nums[i]);
      res = Math.max(pre, res);
  }
  return res;
};