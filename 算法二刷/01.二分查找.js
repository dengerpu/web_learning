// 输入: nums = [-1,0,3,5,9,12], target = 9     
// 输出: 4       
// 解释: 9 出现在 nums 中并且下标为 4    
// 输入: nums = [-1,0,3,5,9,12], target = 2     
// 输出: -1        
// 解释: 2 不存在 nums 中因此返回 -1       

function bonarySearch(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
console.log(bonarySearch([-1,0,3,5,9,12], 9))
console.log(bonarySearch([-1,0,3,5,9,12], 2))