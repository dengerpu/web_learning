/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let num = n;
  let map = new Map();
  while(num != 1) {
      num = getSum(num + '');
      if(map.has(num)) {
          break;
      }
      map.set(num, 1);

  }
  if(num == 1) {
      return true;
  } else {
      return false;
  }
  
  
};
let getSum = function(arr) {
  if(typeof arr == 'string') {
      arr = arr.split('');
  }
  let sum = 0;
  arr.forEach(item => {
      sum += item * item;
  });
  return sum;
}