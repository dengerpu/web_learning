/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n = nums.length;
    // 将负数变为n（数组长度），最理想情况下最小整数按顺序排列全都有，然后最小整数是n + 1,否则就是[1,n]之间缺失的最小正整数
    for(let i = 0; i < n; i++) {
        if(nums[i] <= 0) {
            nums[i] = n + 1;
        }
    }
    // 将在[1,n]中存在的整数置为负数
    for(let i = 0; i < n; i++) {
        let num = Math.abs(nums[i]); // 取绝对值没必须，已经保证都为正数了
        if(num <= n) {
            nums[num - 1] = - Math.abs(nums[num - 1]);
        }
    }
    for(let i = 0; i < n; i++) {
        if(nums[i] > 0) {
            return i + 1;
        }
    }
    return n + 1;
};