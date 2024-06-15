/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  // 对每一行都使用二分查找 (m行n列。时间复杂度(o(mlogn)))
  for(let i = 0; i < matrix.length; i++) {
      let res = binarySearch(matrix[i], target);
      if(res != -1) {
          return true;
      }
  }
  return false;
};
var binarySearch = function (arr, target) {
  let left = 0; right = arr.length - 1;
  while(left <= right) {
      let mid = (left + right) >> 1;
      if(arr[mid] === target) {
          return mid;
      } else if (arr[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  return -1;
}