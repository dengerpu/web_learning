// 快慢指针
function removeElement(nums, val) {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if(val != nums[right]) {
      nums[left] = nums[right];
      left++;
    }
  }
  return left;
}
console.log(removeElement([3,2,2,3], 3))
console.log(removeElement([0,1,2,2,3,0,4,2], 2))