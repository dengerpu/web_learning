/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let operator = ['+', '-', '*', '/'];
  let stack = [];
  for(let i = 0; i < tokens.length; i++) {
      if(!operator.includes(tokens[i])) { // 不是操作符直接入栈
          stack.push(tokens[i]);
      }else { // 是操作符，去除前两个数
          let right = parseInt(stack.pop());
          let left = parseInt(stack.pop());
          let result = 0;
          switch (tokens[i]){
              case '+': result = left + right;  break;
              case '-': result = left - right;  break;
              case '*': result = left * right;  break;
              case '/': result = parseInt(left / right);  break; // left / right | 0 向0截断
          }
          stack.push(result);
      }
  }
  return stack.pop();
};