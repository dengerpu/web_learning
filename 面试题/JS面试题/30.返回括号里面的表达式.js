function extractValue(str) {
  let stack = [];
  let pairs = [];

  // 遍历字符串，记录左括号的索引和匹配的右括号索引
  for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') {
          stack.push(i); // 记录左括号的索引
      } else if (str[i] === ')') {
          if (stack.length > 0) {
              let startIndex = stack.pop(); // 弹出栈顶的左括号索引
              pairs.push([startIndex, i]); // 将匹配的左右括号索引存储起来
          }
      }
  }
  let result = [];
  // 根据保存的索引对提取括号内的内容，并拼接成最终的结果
  for (let pair of pairs) {
      result.push(str.slice(pair[0] + 1, pair[1]));
  }
  return result;
}
console.log(extractValue('((2+3)*(2-3))')) // [ '2+3', '2-3', '(2+3)*(2-3)' ]
console.log(extractValue('((2+3))')) // [ '2+3', '(2+3)' ]