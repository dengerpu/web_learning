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
 // 中序遍历。左根右
// var inorderTraversal = function(root) {
//     let res = [];
//     inorder(root, res);
//     return res;
// };
// var inorder = function(root, res) {
//     if(root == null) return null;
//     inorder(root.left, res);
//     res.push(root.val);
//     inorder(root.right, res);
// }

// 迭代法
var inorderTraversal = function(root){
  let res = []; let stack = [];
  let curr = root;
  while(curr || stack.length > 0) {
      while(curr) {
          stack.push(curr);
          curr = curr.left;
      }
      curr = stack.pop();
      res.push(curr.val);
      curr = curr.right;
  }
  return res;
}