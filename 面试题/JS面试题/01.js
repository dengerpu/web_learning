let n = 5;
let arr = [8, -4, 2, -6, -5, 1]
// 选取偶数区间除以2，求和的最大值
function maxSum(arr) {
  let sum = 0;
  let result = []
  result.push(getSum(arr));
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      sum = 0;
      sum += getSum(arr.slice(0, i))
      for (let j = i + 2; j < arr.length; j += 2) {
        if (j + 1 < arr.length) {
          sum += (getSum(arr.slice(i, j + 1)) / 2);
          sum += getSum(arr.slice(j + 1));
          result.push(sum);
        }
      }
    }
  }
  console.log(result)
}
function getSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
maxSum(arr)