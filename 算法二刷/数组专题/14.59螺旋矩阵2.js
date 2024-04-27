/**
 * 错误思路，边界条件不明确
 * 每条边的处理规则都要相同, 遵循左闭右开的原则
 * @param {*} n 
 */
function generateMatrix(n) {
  let res = new Array(n).fill(0).map(item => new Array(n).fill(0));
  let loop = 1;
  let cnt = 1;
  let startx = 0;
  let starty = 0;
  while(loop <= n / 2) {
    // 向右
    for(let j = startx; j < n - loop; j++) {
      res[startx][j] = cnt++;
    }
    // 向下
    for(let i = starty; i < n - loop; i++) {
      res[i][n - loop] = cnt++;
    }
    // 向左
    for(let j = n - loop; j >= startx + 1; j--) {
      res[n - loop][j] = cnt++;
    }
    // 向上
    for(let i = n - loop; i >= starty + 1; i--) {
      res[i][startx] = cnt++;
    }
    startx++;
    starty++;
    loop++;
  }
  // 奇数
  if(n % 2 === 1) {
    res[startx][starty] = cnt;
  }
  return res;
}
console.log(generateMatrix(5))
console.log(generateMatrix(4))