/**
 * 滑动窗口思想
 * @param {*} target 
 * @param {*} nums 
 */
function minSubArrayLen(target, nums) {
  // 定义双指针
  let left = 0, right = 0;
  // 定义一个变量用来记录最小长度
  let minLen = nums.length + 1;
  let sum = 0;
  while (right < nums.length) {
    sum += nums[right];
    while(sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      left++;
      sum -= nums[left - 1];
    }
    right++;
  }
  // 如果最小长度为数组的长度加一，说明没有符合条件的子数组
  if(minLen === nums.length + 1) {
    return 0;
  }
  return minLen;
}
console.log(minSubArrayLen(7, [2,3,1,2,4,3]));