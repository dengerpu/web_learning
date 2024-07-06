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
 * @return {number[]}
 */
var rightSideView = function(root) {
  if(root == null) return [];
  let res = [];
  while(root) {
      res.push(root.val);
      if(root.right != null) {
          root = root.right;
      } else {
          root = root.left;
      }
  }
  return res;
};