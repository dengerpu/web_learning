/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
var maxSubArray = function(nums) {
    let pre = 0, res = nums[0];
    for(let i = 0; i < nums.length; i++) {
        pre = Math.max(pre + nums[i], nums[i]);
        res = Math.max(pre, res);
    }
    return res;
};

// 分治方法
var maxSubArray = function (nums) {
    return getInfo(nums, 0, nums.length - 1).maxSum;
};
function Status(l, r, m, i) {
    this.lSum = l; // [l,r]以l为左端点的最大子段和
    this.rSum = r; // [l,r]以r为右端点的最大子段和
    this.maxSum = m; // [l,r]区间内的最大子段和
    this.iSum = i; // [l,r]区间和
}
const pushUp = (l, r) => {
    const iSum = l.iSum + r.iSum;
    const lSum = Math.max(l.lSum, l.iSum + r.lSum);
    const rSum = Math.max(r.rSum, r.iSum + l.rSum);
    const maxSum = Math.max(Math.max(l.maxSum, r.maxSum), l.rSum + r.lSum);
    return new Status(lSum, rSum, maxSum, iSum);
}
const getInfo = (a, l, r) => {
    if (l === r) {
        return new Status(a[l], a[l], a[l], a[l]);
    }
    const m = (l + r) >> 1;
    const lSub = getInfo(a, l, m)
    const rSub = getInfo(a, m + 1, r);
    return pushUp(lSub, rSub);
}