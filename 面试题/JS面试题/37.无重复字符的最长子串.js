function getLength(str) {
  let set = new Set()
  let length = str.length
  let rk = -1, ans = 0
  for (let i = 0; i < length; ++i) {
    if(i != 0) {
      // 左指针右移，移除第一个字符
      set.delete(str[i - 1])
    }
    while(rk + 1 < length && !set.has(str[rk + 1])) {
      // 右指针右移，直到遇到重复字符
      set.add(str[rk + 1])
      ++rk
    }
    // 第i到rk个字符是一个极长的无重复子串
    ans = Math.max(ans, rk - i + 1)
  }
  return ans
}
console.log(getLength('abcabcbb'))
console.log(getLength('bbbbb'))
console.log(getLength('pwwkew'))