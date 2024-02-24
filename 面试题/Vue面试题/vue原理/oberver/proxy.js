// const data = {
//   a: 100,
//   b: 200
// }
const data = ['a', 'b', 'c']

const proxyData = new Proxy(data, {
  // target, 就是原来的对象， receiver被代理后的proxy对象
  get(target, key, receiver) {
    console.log(receiver)
    // 只处理本身（非原型的）属性
    const ownKeys = Reflect.ownKeys(target)
    if(ownKeys.includes(key)) {
      console.log('get', key) // 监听
    }
    const result = Reflect.get(target, key, receiver)
    return result
  },
  set(target, key, newVal, receiver) {
    // 重复的数据，不处理
    if(target[key] === newVal) {
      return true
    }
    const result = Reflect.set(target, key, newVal, receiver)
    // 如果属性只读，则返回 false。如 object.defineProperty writable false
    console.log('set', key, newVal)
    // console.log('result', result) // true
    return result // 是否设置成功
  },
  deleteProperty(target, key) {
    const result = Reflect.deleteProperty(target, key)
    console.log('delete property', key)
    // console.log('result', result) // true
    return result // 是否删除成功
  }
})

// 测试
// proxyData.a
// proxyData.b
// proxyData.a = 101
// delete proxyData.a

proxyData.push('a')
proxyData[0]
proxyData.length