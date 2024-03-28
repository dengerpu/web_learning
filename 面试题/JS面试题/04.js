let n = 3
let arr = [1, 2, 3]
let fResult = [1, 1]
// 求阶乘
function factorial(n) {
  for(let i = 1; i <= n; i++) {
    fResult[i] = fResult[i - 1] * i;
  }
}
// 求和
function getSum(arr) {
    let sum = 1;
    let maxNum = getMax(arr)
    factorial(maxNum)
    for (let i = 0; i < arr.length; i++) {
      sum *= fResult[arr[i]];  
    }
    return sum;
}
function getResult(arr) {
  let n = getSum(arr) % 1000000007;
  let count = 0;
  for(let i = 1; i <= n; i++) {
    if(n % i == 0) {
      count++;
    }
  }
  return count;
}
function getMax(arr) {
  let max = arr[0];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(getResult(arr))