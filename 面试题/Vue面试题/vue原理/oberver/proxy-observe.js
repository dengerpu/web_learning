// 创建响应式
function reactive(target = {}) {
  if (typeof target !== 'object' || target == null) {
    // 不是对象或数组
    return target
  }

  // 代理配置
  const proxyConf = {
    get(target, key, receiver) {
      // 只处理本身（非原型的）属性
      const ownKeys = Reflect.ownKeys(target)
      if (ownKeys.includes(key)) {
        console.log('get', key) // 监听
      }
      const result = Reflect.get(target, key, receiver)
      // 深度监听
      // 性能如何提升的？ 如果是普通对象的话会直接返回
      return reactive(result)
    },
    set(target, key, value, receiver) {
      if (value === target[key]) {
        return true
      }
      const ownKeys = Reflect.ownKeys(target)
      if (ownKeys.includes(key)) {
        console.log('已有的 key', key)
      } else {
        console.log('新增的 key', key)
      }
      const result = Reflect.set(target, key, value, receiver)
      console.log('set', key, value)
      // console.log('result', result) // true
      return result // 是否设置成功
    },
    deleteProperty(target, key) {
      const result = Reflect.deleteProperty(target, key)
      console.log('delete property', key)
      // console.log('result', result) // true
      return result // 是否删除成功
    }
  }
  // 生成代理对象
  const observed = new Proxy(target, proxyConf)
  return observed
}

// 测试数据
const data = {
  name: 'zhangsan',
  age: 20,
  info: {
    city: 'beijing',
    a: {
      b: {
        c: {
          d: {
            e: 100
          }
        }
      }
    }
  }
}

const proxyData = reactive(data)