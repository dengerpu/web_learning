/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  return check(root, -Infinity, Infinity);
};
var check = function(root, lower, upper) {
  if(root == null) return true;
  if(root.val <= lower || root.val >= upper) {
      return false;
  }
  return check(root.left, lower, root.val) && check(root.right, root.val, upper);
}