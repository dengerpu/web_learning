/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let res = [];
  let arr = [...nums];
  arr.sort((a, b) => a - b);
  let length = arr.length;
  for(let i = 0; i <= length - 4; i++) {
      // 对第一个数进行去重
      if(i > 0 && arr[i] === arr[i-1]) i++;
      for(j = i + 1; j <= length - 3; j++) {
          if(j > length - 2) continue;
          let left = j + 1, right = length - 1;
          while(left < right) {
              let sum = arr[i] + arr[j] + arr[left] + arr[right];
              if (sum === target) {
                  res.push([arr[i], arr[j], arr[left], arr[right]]);
                  while(left < right && arr[left] === arr[left+1]) left++;
                  while(left < right && arr[right] === arr[right-1]) right--;
                  left++;
                  right--;
              } else if(sum > target) {
                  right--;
              } else {
                  left++;
              }
          }
           // 对第二个数进行去重
          if(arr[j] === arr[j+1]) j++;
      }
  }
  return res;
};
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));