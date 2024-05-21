/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let length =s.length;
  let res = '';
  for(i = 0; i < length; i++){
    if(s[i] === ' '){
      continue;
    }
    let start = i;
    while(i < length && s[i] !== ' '){
      i++;
    }
    res += s.slice(start, i) + ' ';
  }
  return res.slice(0, res.length - 1).split(' ').reverse().join(' ');
};
console.log(reverseWords("the sky is blue"));
  