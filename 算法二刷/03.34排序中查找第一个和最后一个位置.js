
function searchRange(nums, target) {
  let leftIndex = getLeftPos(nums, target);
  let rightIndex = getRightPos(nums, target);
  if (leftIndex == -2 || rightIndex == -2) {
    return [-1, -1];
  }
  if(rightIndex - leftIndex > 1) {
    return [leftIndex + 1, rightIndex - 1];
  }
  return [-1, -1];
}

// 获取最左边位置
function getLeftPos(nums, target) {
  let left = 0, right = nums.length - 1;
  let leftBorder = -2;
  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    if(nums[mid] < target) {
      left = mid + 1;
    } else { // 此时 nums[mid] >= target
      right = mid - 1;  
      leftBorder = right;
    }
  }
  return leftBorder;
}
// 找到最右边位置
function getRightPos(nums, target) {
  let left = 0, right = nums.length - 1;
  let rightBoder = -2;
  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    if(nums[mid] <= target) {
      left = mid + 1;
      rightBoder = left;
    } else {
      right = mid - 1;
    }
  }
  return rightBoder;
}
console.log(searchRange([5,7,7,8,8,10], 8))
console.log(searchRange([5,7,7,8,8,10], 6))
console.log(searchRange([], 0))
console.log(searchRange([2,2], 3))