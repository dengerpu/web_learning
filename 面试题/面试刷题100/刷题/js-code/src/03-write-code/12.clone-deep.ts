/**
 * 只考虑了简单的数组和对象
 * @param obj 
 * @returns 
 */
// function cloneDeep(obj: any) {
//   if(typeof obj !== 'object' || obj == null) return obj
//   let res: any;
//   if(Array.isArray(obj)) {
//     res = []
//   } else {
//     res = {}
//   }
//   let keys = Object.keys(obj)
//   console.log(keys)
//   for(let key of keys) {
//     console.log(key, obj.hasOwnProperty(key))
//     if(obj.hasOwnProperty(key)) {
//       console.log(key)
//       res[key] = cloneDeep(obj[key])
//     }
//   }
//   return res
// }
// // 功能测试
// const a: any = {
//     set: new Set([10, 20, 30]),
//     map: new Map([['x', 10], ['y', 20]])
// }
// // a.self = a // 循环引用会栈溢出
// console.log( cloneDeep(a) ) // 无法处理 Map Set 和循环引用

/**
 * 深拷贝
 * @param obj
 * @param map 
 * @returns 
 */
function cloneDeep(obj: any, map = new WeakMap()) {
  if(typeof obj !== 'object' || obj == null) return obj
  // 避免循环引用
  const objFromMap = map.get(obj)
  if(objFromMap) return objFromMap

  let target: any = {};
  map.set(obj, target)

  //Map
  if(obj instanceof Map) {
    target = new Map()
    map.set(obj, target)
    obj.forEach((value, key) => {
      const v1 = cloneDeep(value, map)
      const k1 = cloneDeep(key, map)
      target.set(k1, v1)
    })
  }
  // Set
  if(obj instanceof Set) {
    target = new Set()
    map.set(obj, target)
    obj.forEach(value => {
      const v1 = cloneDeep(value, map)
      target.add(v1)
    })
  }
  // Array
  if(obj instanceof Array) {
    target = obj.map(item => cloneDeep(item, map))
    map.set(obj, target)
  }
  // Object
  for(const key in obj) {
    const val = obj[key]
    const val1 = cloneDeep(val, map)
    target[key] = val1
  }
  return target
}

// // 功能测试
// const a: any = {
//     set: new Set([10, 20, 30]),
//     map: new Map([['x', 10], ['y', 20]]),
//     info: {
//         city: '北京'
//     },
//     fn: () => { console.info(100) }
// }
// a.self = a
// console.log( cloneDeep(a) )

const m = new Map()
m.set('x', m)

const m1 = cloneDeep(m)
console.log('m1', m1.get('x'))