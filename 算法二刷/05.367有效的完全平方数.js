function isPerfectSquare(num) {
  let left = 1, right = num;
  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    if(mid * mid === num) {
      return true;
    } else if(mid * mid < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}
console.log(isPerfectSquare(16))
console.log(isPerfectSquare(12))