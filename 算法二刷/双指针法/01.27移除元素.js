/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 这种会改变元素原来的位置
var removeElement = function(nums, val) {
  let left = 0, right = nums.length - 1;
  while(left <= right) {
    while(nums[left] !== val && left <= right) {
      left++;
    }
    while(nums[right] === val && left <= right) {
      right--;
    }
    if(left <= right) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right--;
    }
  }
  return nums;
};
console.log(removeElement([3,2,2,3], 3));
// 双指针法
var removeElement2 = function(nums, val) {
  let slow = 0; fast = 0;
  while(fast < nums.length) {
    if(nums[fast] !== val) {
      nums[slow++] = nums[fast++];
    } else {
      fast++;
    }
  }
  return slow;
}