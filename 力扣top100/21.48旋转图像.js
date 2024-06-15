/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  // 先按行对称折叠，然后按照对角线折叠
  let m = matrix.length, n = matrix[0].length;
  for(let i = 0; i < Math.floor(m / 2); i++) {
      let temp = matrix[i];
      matrix[i] = matrix[m - i - 1];
      matrix[m - i - 1] = temp;
  }
  for(let i = 0; i < m; i++) {
      for(let j = 0; j < i; j++) {
          let temp = matrix[i][j];
          matrix[i][j] = matrix[j][i];
          matrix[j][i] = temp;
      }
  }
};

// 交换法
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let n = matrix.length;
  let arr = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for(let i = 0; i < n; i++) {
      for(let j = 0; j < n; j++) {
          arr[i][j] = matrix[n - j - 1][i];
          // console.log(j , n - i - 1);
          // arr[j][n - i - 1] = matrix[i][j];
      }
  }
  for(let i = 0; i < n; i++) {
      for(let j = 0; j < n; j++) {
          matrix[i][j] = arr[i][j];
      }
  }
};