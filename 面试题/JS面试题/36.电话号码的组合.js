let map = [
  "", // 0
  "", // 1
  "abc", // 2
  "def", // 3
  "ghi", // 4
  "jkl", // 5
  "mno", // 6
  "pqrs", // 7
  "tuv", // 8
  "wxyz", // 9
]
function keyboard(digits) {
  let res = []
  let length = digits.length
  for(let i = 0; i < length; i++) {
    res = _compose(res, map[digits[i]])
  }
  return res
}

function _compose(arr1, arr2) {
  let res = []
  if(arr1.length == 0) return arr2.split('')
  if(arr2.length == 0) return arr1.split('')
  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
      res.push(arr1[i] + arr2[j])
    }
  }
  return res
}
console.log(keyboard(''))
console.log(keyboard('2'))
console.log(keyboard('23'))

// 方法二，采用回溯算法
let result = []
let path = []
function keyboard2(digits) {
  if(digits.length === 0) return []
  path = []
  result = []
  backTracking(digits, 0)
  return result
}
function backTracking(digits, index) {
  if(index === digits.length) {
    result.push(path.join(''))
    return
  }
  let letters = map[digits[index]]
  for(let i = 0; i < letters.length; i++) {
    path.push(letters[i])
    backTracking(digits, index + 1)
    path.pop() // 回溯
  }
}
console.log(keyboard2(''))
console.log(keyboard2('2'))
console.log(keyboard2('23'))