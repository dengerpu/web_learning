/**
 * 定义快慢指针，慢指针指向当前非零元素应该在的位置，快指针遍历数组，
 * @param {*} nums 
 */
function moveZeroes(nums) {
  let slow = 0;
  let length = nums.length;
  for (let fast = 0; fast < length; fast++) {
    if (nums[fast] !== 0) {
      swap(nums, fast, slow);
      slow++;
    }
  }
}
function swap(nums, i, j) {
  if(i !== j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
}
let nums = [0,1,0,3,12];
moveZeroes(nums)
console.log(nums);