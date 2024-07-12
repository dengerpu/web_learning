/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let res = [];
let path = [];
var subsets = function(nums) {
   let res = [];
   let path = [];
   function backtracking(startIndex) {
       res.push([...path]);
       for(let i = startIndex; i < nums.length; i++) {
           path.push(nums[i]);
           backtracking(i+1);
           path.pop();
       }
   }
   backtracking(0);
   return res;
};