// 实现lodash.get
const obj = {
  a: {
    b: 123
  },
  arr: [
    {
      demo: 'demo'
    }
  ]
}

function getKey (obj, str, defaultStr) {
  let res = obj
  let arr = Array.isArray(str) ? str : str.split('.')
  console.log('arr', arr)
  for (let i = 0; i < arr.length; i++) {
    let keys = arr[i].split('[')
    console.log("keys", keys)
    if (keys.length === 1) {
      res = res[keys[0]]
    } else {
      // 处理arr[0], 获取到这0
      let index = parseInt(keys[1].slice(0, -1))
      res = res[keys[0]][index]
    }
  }
  return (res ? res : defaultStr)
}

console.log(getKey(obj, 'a.b'));
console.log(getKey(obj, 'arr[0].demo'));
console.log(getKey(obj, 'a.b.c', 'default'));
console.log(getKey(obj, ['arr', '0', 'demo']))
