function sortedSquares(nums) {
  let left = 0, right = nums.length - 1;
  let k = nums.length - 1;
  let res = new Array(k + 1).fill(0);
  while (left <= right) {
    if (nums[left] * nums[left] > nums[right] * nums[right]) {
      res[k] = nums[left] * nums[left];
      left++;
    } else {
      res[k] = nums[right] * nums[right];
      right--;
    }
    k--;
  }
  return res;
}
console.log(sortedSquares([-4,-1,0,3,10]))
