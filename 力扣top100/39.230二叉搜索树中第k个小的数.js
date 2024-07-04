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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  var inorder = function(root) {
      if(root == null) return;
      inorder(root.left);
      res.push(root.val);
      inorder(root.right);
  }
  let res = [];
  inorder(root);
  return res[k - 1];
};