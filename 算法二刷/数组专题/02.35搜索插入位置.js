// 搜索插入位置
// 输入: nums = [1,3,5,6], target = 5
// 输出: 2
function searchInsert(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1
    }
  }
  return left;
}
console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 7))