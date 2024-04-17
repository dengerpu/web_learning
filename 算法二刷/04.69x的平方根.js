// 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
// 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
// 输入：x = 8
// 输出：2

function mySqrt(x) {
  let left = 1, right = x;
  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    if(mid * mid === x) {
      return mid;
    } else if(mid * mid < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
}
console.log(mySqrt(8));
console.log(mySqrt(16));