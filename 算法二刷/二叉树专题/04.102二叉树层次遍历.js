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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let queue = [];
  let res = [];
  if(root == null) return res;
  queue.push(root);
  while(queue.length > 0) {
    let len = queue.length;
    let arr = [];
    for(let i = 0; i < len; i++) {
      let node = queue.shift();
      arr.push(node.val);
      if(node.left != null) queue.push(node.left);
      if(node.right != null) queue.push(node.right);
    }
    res.push(arr);
  }
  return res;
};