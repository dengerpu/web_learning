function isMatch(left: string | undefined, right: string | undefined) {
  if(left === '(' && right === ')') return true;
  if(left === '[' && right === ']') return true;
  if(left === '{' && right === '}') return true;
  return false
}
/**
 * 括号匹配
 * @param str 
 */
export function matchBracket(str: string): boolean {
  const length = str.length
  if(length === 0) return true
  const leftStr = "([{"
  const rightStr= ")]}"
  const stack: string[] = []
  for(let i = 0; i < length; i++) {
    if(leftStr.indexOf(str[i]) !== -1) {
      stack.push(str[i])
    }else if(rightStr.indexOf(str[i]) !== -1) {
      if(stack.length === 0) {
        return false
      }
      let top: string | undefined = stack.pop()
      if(!isMatch(top, str[i])) {
        return false
      }
    }
  }
  return stack.length === 0
}

// // 功能测试
// const str = '{a(b[c]d]e}f'
// console.info(123123, matchBracket(str))