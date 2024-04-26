function generateMatrix(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(new Array(n).fill(i));
  }
}