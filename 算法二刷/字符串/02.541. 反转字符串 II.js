/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let length = s.length;
  if (length <= k) {
    return s.split('').reverse().join('');
  }
  let res = '';
  for (let i = 0; i < length; i += 2 * k) {
    res += s.slice(i, i + k).split('').reverse().join('') + s.slice(i + k, i + 2 * k);
  }
  return res;
};
console.log(reverseStr('abcdefg', 2));