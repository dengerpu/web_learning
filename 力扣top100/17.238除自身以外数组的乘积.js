/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 前缀和乘积，L为左边的乘积，R为右边的乘积
var productExceptSelf = function(nums) {
    let length = nums.length;
    let L = new Array(length);
    let R = new Array(length);
    
    let res = new Array(length);
    L[0] = 1;
    for(let i = 1; i < length; i++) {
        L[i] = L[i - 1] * nums[i - 1];
    }
    R[length - 1] = 1;
    for(let i = length - 2; i >= 0; i--) {
        R[i] = R[i + 1] * nums[i + 1] 
    }
    for(let i = 0; i < length; i++) {
        res[i] = L[i] * R[i];
    }
    return res;
};