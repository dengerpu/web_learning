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
var preorderTraversal = function(root) {
  if (root === null) return [];
  let list = [];
  // 1.确定参数和返回值
  prevOrder(root, list);
  return list;
};

var prevOrder = function(root, list) {
  // 2.确定终止条件
  if (root === null) return;
  // 3.确定单层递归逻辑
  list.push(root.val);
  prevOrder(root.left, list);
  prevOrder(root.right, list);
}

// 非递归方式
var preOrder = function(root) {
  if (root === null) return [];
  let stack =[];
  stack.push(root);
  let res = []
  while(stack.length > 0) {
    let top = stack.pop();
    res.push(top.val);
    if (top.right !== null) {
      stack.push(top.right);
    }
    if (top.left !== null) {
      stack.push(top.left);
    }
  }
  return res;
}