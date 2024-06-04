/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//     // 双指针
//     let slow = 0, fast = 0;
//     while( fast < nums.length) {
//         if(nums[fast] != 0) {
//             nums[slow++] = nums[fast];
//         }
//         fast++;
//     }
//     for(let i = slow; i < nums.length; i++) {
//         nums[i] = 0;
//     }
//     return nums;
// };
// 一次遍历
var moveZeroes = function(nums) {
  // 双指针
  let slow = 0;
  for(let fast = 0; fast < nums.length; fast++) {
      if(nums[fast] != 0) { // 满足条件的元素交换
          let temp = nums[slow];
          nums[slow] = nums[fast];
          nums[fast] = temp;
          slow++;
      }
  }
  return nums;
};