/**
 * 利用栈，构造出最终的字符串
 * @param {*} s 
 * @param {*} t 
 */
function backspaceCompare(s, t) {
  return getStr(s) === getStr(t);
}
function getStr(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '#') {
      if(stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(str[i]);
    }
  }
  return stack.join('');
}

/**
 * 利用双指针倒序遍历
 * @param {*} s 
 * @param {*} t 
 */
function backspaceCompare2(s, t) {
  let i = s.length - 1, j = t.length - 1;
  let skipS = 0, skipT = 0;
  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (s[i] === '#') {
        skipS++;
        i--;
      } else if (skipS > 0) {
        skipS--;
        i--;
      } else {
        break;
      }
    }
    while (j >= 0) {
      if (t[j] === '#') {
        skipT++;
        j--;
      } else if (skipT > 0) {
        skipT--;
        j--;
      } else {
        break;
      }
    }
    if(i >= 0 && j >= 0) {
      if (s[i] !== t[j]) {
        return false;
      }
    } else {
      // 其中一个字符串已经达到了起始位置
      if (i >= 0 || j >= 0) {
        return false;
      }
    }
    i--;
    j--;
  }
  return true;
}
console.log(backspaceCompare2('ab#c', 'ad#c'));
console.log(backspaceCompare2('ab##', 'c#d#'));
console.log(backspaceCompare2('a#c', 'b'));

console.log(backspaceCompare('ab#c', 'ad#c'));
console.log(backspaceCompare('ab##', 'c#d#'));
console.log(backspaceCompare('a#c', 'b'));