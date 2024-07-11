/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let res = [];
let path = [];
var subsets = function(nums) {
   res = [];
   path = [];
   backTrack(nums, 0, path);
   return res;
};
var backTrack = function(nums, i, path) {
   if(path.length <= nums.length) {
       res.push([...path]);
       return;
   }
   for(let start = i; start < nums.length; start++) {
       path.push(nums[i]);
       backTrack(nums, start + 1, path);
       path.pop();
   }
}