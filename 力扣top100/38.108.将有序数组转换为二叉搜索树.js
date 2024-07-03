/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function(nums) {
  return createTree(nums, 0, nums.length - 1);
};
var createTree = function(nums, left, right) {
  if(left > right) return null;
  let mid = Math.floor((left + right) / 2);
  console.log(mid);
  let root = new TreeNode(nums[mid]);
  root.left = createTree(nums, left, mid - 1);
  root.right = createTree(nums, mid + 1, right);
  return root;
}