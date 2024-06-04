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
var postorderTraversal = function(root) {
    let res = [];
    function dfs(root) {
        if (root === null) return;
        dfs(root.left);
        dfs(root.right);
        res.push(root.val);
    }
    dfs(root);
    return res;
}

// 迭代法
var postorderTraversal = function(root) {
    if (root === null) return [];
    let stack = [root];
    let res = [];
    while (stack.length) {
      let top = stack.pop();
      res.push(top.val);
      if (top.left) stack.push(top.left);
      if (top.right) stack.push(top.right);
    }
    return res.reverse();
}