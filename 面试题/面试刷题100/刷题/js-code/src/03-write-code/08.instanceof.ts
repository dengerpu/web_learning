
export function myInstanceof(instance: any, origin: any) {
  if(instance == null) return false // null或者undefined返回false
  const type = typeof instance // 获取instance的类型
  if(type !== 'object' && type !== 'function') return false // 如果不是对象和函数，返回false

  let tempInstance = instance // 防止修改instance
  while(tempInstance) {
    if(tempInstance.__proto__ === origin.prototype) return true
    tempInstance = tempInstance.__proto__ // 顺着原型链，往上找
  }
  return false
}

// // 功能测试
// console.info( myInstanceof({}, Object) )
// console.info( myInstanceof([], Object) )
// console.info( myInstanceof([], Array) )
// console.info( myInstanceof({}, Array) )
// console.info( myInstanceof('abc', String) )