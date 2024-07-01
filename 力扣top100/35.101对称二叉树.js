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
 // 递归
// var isSymmetric = function(root) {
//     if(root == null) return true;
//     return check(root.left, root.right);
// };
// var check = function(left, right) {
//     if(left === null && right !== null) return false;
//     if(right === null && left !== null) return false;
//     if(left === null && right === null) {
//         return true;
//     }
//     if(left.val != right.val) return false;
//     return check(left.left, right.right) && check(left.right, right.left);
// }

// 迭代的方式
var isSymmetric = function(root) {
  return check(root, root);
}
var check = function(p, q) {
  let queue1 = [], queue2 = [];
  queue1.push(p); queue2.push(q);
  while(queue1.length > 0) {
      let u = queue1.shift();
      let v = queue2.shift();
      if(!u && !v) continue; // 两个都为空
      if ((!u || !v) || (u.val !== v.val)) return false; // 一个为空或者值不相同
      queue1.push(u.left);
      queue2.push(v.right);
      
      queue1.push(u.right);
      queue2.push(v.left);
  }
  return true;
}