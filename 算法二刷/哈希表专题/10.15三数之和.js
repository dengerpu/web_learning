/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
  let map = new Map();
  let path = [];
  let backTracking = function(nums, index, sum, path) {
    if(path.length == 3) {
      if(sum == 0) {
        const str = [...path].sort().toString();
        map.set(str, [...path])
      }
      return
    }
    for(let i = index; i < nums.length; i++) {
      path.push(nums[i]);
      backTracking(nums, i + 1, sum + nums[i], path);
      path.pop();
    }
  }
  backTracking(nums, 0, 0, path);
  let res = [];
  map.forEach(item => {
   res.push(item); 
  })
  return res;
};


console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([0,1,1]));

