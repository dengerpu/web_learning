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
var inorderTraversal = function(root) {
    let res = [];
    function dfs(root) {
        if(!root) return;
        dfs(root.left);
        res.push(root.val);
        dfs(root.right);
    }
    dfs(root);
    return res;
}
// 迭代
var inorderTraversal = function(root) {
    let res = [];
    if(root == null) return [];
    let stack = [root];
    while(stack.length) {
        let top = stack[stack.length - 1];
        while(top.left) {
            stack.push(top.left);
            top = top.left;
        }
        top = stack.pop();
        res.push(top.val);
        while(top.right) {
            stack.push(top.right);
            top = top.right;
        }
    }
    return res;
}