/**
 * @description MyPromise
 * @author 小邓
 */

class MyPromise {
  state = 'pending' // 状态，'pending' 'fulfilled' 'rejected'
  value = undefined // 成功后的值
  reason = undefined // 失败的值
  onFulfilledCallbacks = [] // pending状态下，成功的回调函数集
  onRejectedCallbacks = [] // pending状态下，失败的回调函数集

  // 调用的时候是 new Promise ((resolve, reject) => {}), 所以这里要传一个函数
  constructor(fn) {
    const resolveHandler = (value) => {
      // 加 setTimeout ，参考 https://coding.imooc.com/learn/questiondetail/257287.html
      setTimeout(() => {
        if(this.state === 'pending') {
          this.state = 'fulfilled'
          this.value = value
          this.onFulfilledCallbacks.forEach(fn => fn(this.value))
        }
      })
    }

    const rejectHandler = (reason) => {
      setTimeout(() => {
        if(this.state === 'pending') {
          this.state = 'rejected'
          this.reason = reason
          this.onRejectedCallbacks.forEach(fn => fn(this.reason))
        }
      })
    }

    try{
      fn(resolveHandler, rejectHandler)
    } catch(err) {
      rejectHandler(err)
    }
  }

  // const p1 = new Promise((resolve, reject) => {})
  // p1.then(() => {}, () => {})  如果pending状态是不会执行的
  // then()里面可以传递两个函数，一个成功的回调，一个失败的回调
  then(fn1, fn2) {
    fn1 = typeof fn1 === 'function' ? fn1 : (v) => v
    fn2 = typeof fn2 === 'function' ? fn2 : (e) => e
    if(this.state === 'pending') {
      const p1 = new MyPromise((resolve, reject) => {
        this.onFulfilledCallbacks.push(() => {
          try {
            const newValue = fn1(this.value);
            resolve(newValue)
          } catch (err) {
            reject(err)
          }
        })
        this.onRejectedCallbacks.push(() => {
          try {
            const newValue = fn2(this.reason);
            reject(newValue)
          } catch (err) {
            reject(err)
          }
        })
      })
      return p1
    }
    if(this.state === 'fulfilled') {
      const p1 = new MyPromise((resolve, reject) => {
        try {
          const newValue = fn1(this.value);
          resolve(newValue);
        } catch (err) {
          reject(err)
        }
      })
      return p1
    }

    if(this.state === 'rejected') {
      const p1 = new MyPromise((resolve, reject) => {
        try {
          const newReason = fn2(this.reason)
          reject(newReason)
        } catch (err) {
          reject(err)
        }
      })
      return p1
    }
  }

  // const p = new Promise((resolve, reject) => {  reject() })
  // p.catch(() => {}) .catch只能传递一个函数，.then可以传递两个
  // then的一个语法糖，简单模式
  catch(fn) {
    return this.then(null, fn)
  }
}

MyPromise.resolve = function(value) {
  return new Promise((resolve, reject) => {
    resolve(value)
  })
}

MyPromise.reject = function(reason) {
  return new MyPromise((resolve, reject) => {
    reject(reason)
  })
}

MyPromise.all = function (promiseList = []) {
  const p1 = new MyPromise((resolve, reject) => {
    const result = []
    const length = promiseList.length
    let resolvedCount = 0

    promiseList.forEach(p => {
      p.then(data => {
        result.push(data)
        resolvedCount++
        if(resolvedCount === length) {
          resolve(result)
        }
      }).catch(err => {
        reject(err)
      })
    })
  })
  return p1
}

MyPromise.race = function (promiseList = []) {
  let resolved = false
  const p1 = new Promise((resolve, reject) => {
    promiseList.forEach(p => {
      p.then(data => {
        if(!resolved) {
          resolve(data)
          resolved = true
        }
      }).catch((err) => {
        reject(err)
      })
    })
  })
  return p1
}