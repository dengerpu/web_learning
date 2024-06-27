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
 * @return {number}
 */
 // 深度优先遍历
var maxDepth = function(root) {
    if(root == null) return 0;
    return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};

// 广度优先搜索
var maxDepth = function(root) {
  if(root == null) return 0;
  let queue = [];
  queue.push(root);
  let length = 0;
  while(queue.length > 0) {
      let len = queue.length
      for(let i = 0; i < len; i++) {
          let curr = queue.shift();
          if(curr.left) {
              queue.push(curr.left);
          }
          if(curr.right) {
              queue.push(curr.right);
          }
      }
      length++;
  }
  return length;
};