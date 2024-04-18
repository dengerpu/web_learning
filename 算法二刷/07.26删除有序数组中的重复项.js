function removeDuplicates(nums) {
  let left = 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[left] !== nums[i]) {
      left++;
      nums[left] = nums[i];
    }
  }
  return left + 1;
}
console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))