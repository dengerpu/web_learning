function spiralOrder(matrix) {
  // m行n列
  let m = matrix.length;
  let n = matrix[0].length;
  // 定义上下左右四个边界
  let top = 0, bottom = m - 1, left = 0, right = n - 1;
  let res = []
  // 按层模拟
  while (top <= bottom && left <= right) {
    // 向右
    for (let j = left; j <= right; j++) {
      res.push(matrix[top][j]);
    }
    // 向下
    for (let i = top + 1; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    
    if (left < right && top < bottom) {
      // 向左
      for (let j = right - 1; j > left; j--) {
        res.push(matrix[bottom][j]);
      }
      // 向上
      for (let i = bottom; i > top; i--) {
        res.push(matrix[i][left]);
      }
    }
    left++;
    right--;
    top++;
    bottom--;
  }
  return res;
}
// matrix1 = [[1,2,3],[4,5,6],[7,8,9]]
// console.log(spiralOrder(matrix1))
// matrix2 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// console.log(spiralOrder(matrix2))

matrix = [[3],[2]];
console.log(spiralOrder(matrix))
