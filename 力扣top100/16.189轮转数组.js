/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(k === 0 || nums.length === 1) return nums;
    k = k % nums.length;
    let right = nums.length - 1;
    let arr = reverse(nums, 0, right);
    arr = reverse(arr, 0, k - 1);
    arr = reverse(arr, k, right);
    return arr;
};

const reverse = (arr, l, r) => {
    let m = (r - l + 1) >> 1;
    for(let i = 0; i < Math.floor(m); i++) {
        let temp = arr[i + l];
        arr[i + l] = arr[r - i];
        arr[r - i] = temp;
    }
    return arr;
}