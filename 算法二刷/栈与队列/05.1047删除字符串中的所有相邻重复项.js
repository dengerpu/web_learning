/**
 * @param {string} s
 * @return {string}
 */
// var removeDuplicates = function(s) {
//     let stack = [];
//     for(let i = 0; i < s.length; i++) {
//         if(stack.length != 0) {
//             let top = stack[stack.length - 1];
//             if(s[i] === top){
//                 stack.pop();
//             } else {
//                 stack.push(s[i]);
//             }
//         } else {
//             stack.push(s[i]);
//         }
//     }
//     return stack.join('');
// };
// 双指针解法
var removeDuplicates = function(s) {
  let slow = 0, fast = 0, length = s.length;
  let arr = s.split('');
  while(fast < length) {
      arr[slow] = arr[fast];
      if(slow > 0 && arr[slow] == arr[slow - 1]) {
          slow--;
      } else {
          slow++;
      }
      fast++;
  }
  return arr.slice(0, slow).join('');
}