/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = [];
  nums.sort((a, b) => a - b); // 第一步先排序
  for(let i = 0; i < nums.length; i++) {
      // 对第一个数进行去重
      if(i > 0 && nums[i] === nums[i - 1]) {
          continue;
      }
      let j = i + 1, k = nums.length - 1;
      while(j < k) {
          let sum = nums[i] + nums[j] + nums[k];
          if(sum === 0) {
              res.push([nums[i], nums[j], nums[k]]);
              // 对第二个数，第三个数进行去重
              while(j + 1 < nums.length && nums[j] === nums[j+1]) j++;
              while(k > 0 && nums[k] === nums[k-1]) k--;
              j++;
              k--;
          } else if (sum > 0) {
              k--;
          } else {
              j++;
          }
      }
  }
  return res;
};