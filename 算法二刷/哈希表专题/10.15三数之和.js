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

var sum2 = function(nums) {
  const arr = [...nums];
  arr.sort((a,b) => a - b);
  let res = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) break; // 说明没有符合条件的，排序后的第一个数都大于0了
    if(i > 0 && arr[i] == arr[i - 1]) continue; // 说明这个值和前一个值相等，跳过
    let left = i + 1;
    let right = arr.length - 1;
    while(left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if(sum > 0) {
        right--;
      } else if(sum < 0) {
        left++;
      } else {
        res.push([arr[i], arr[left], arr[right]]);
        while(left < right && arr[left] == arr[left + 1]) left++;
        while(left < right && arr[right] == arr[right - 1]) right--;

        // 找到答案
        left++;
        right--;
      }
    }
  }
  return res;
}
console.log(sum2([-1,0,1,2,-1,-4]));
console.log(sum2([0,1,1]));
console.log(sum2([-1,0,1,2,-1,-4,-2,-3,3,0,4]));
// -1 -1 -2 -3 -4 0 0 1 2 3
