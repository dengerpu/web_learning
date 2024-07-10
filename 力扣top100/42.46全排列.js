/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯算法
var res = [];
var path = [];
var permute = function (nums) {
    let used = new Array(nums.length).fill(0);
    backTrack(nums, used);
    return res;
};
var backTrack = function (nums, used) {
    if (path.length === nums.length) {
        nums.push([...path]);
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (used[i] != 0) continue; // 说明已经被访问过了
        path.push(nums[i]);
        used[i] = 1;
        backTrack(nums, used);
        path.pop();
        used[i] = 0;
    }
}