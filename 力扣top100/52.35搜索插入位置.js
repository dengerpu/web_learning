/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;
    let ans = n;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] >= target) {
            right = mid - 1;
        } else {
            ans = mid;
            left = mid + 1;
        }
    }
    return ans;
};