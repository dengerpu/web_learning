Function.prototype.myCall = function(context, ...args) {
    const fn = Symbol('fn')
    context[fn] = this
    const result = context[fn](...args)
    delete context[fn]
    return result;
}

// 1. 如何定义`myApply`
Function.prototype.myApply = function () {
    // 逻辑略
  }
  
  // 2 如何让函数内部的`this`为某个对象
  Function.prototype.myApply = function (thisArg) {
    // 为他添加一个自定义属性，让函数成为他的该属性
    // 使用Symbol生成唯一标记，避免和原属性冲突
    const fn = Symbol()
    thisArg[fn] = this
    const res = thisArg[fn](...args)
    // 移除添加的自定义属性
    delete thisArg[fn]
    // 返回调用结果
    return res
  }
  
  
  // 3 如何让`myApply`接收参数
  Function.prototype.myApply = function (thisArg, args) {
    const fn = Symbol()
    thisArg[fn] = this
    // 调用并获取结果
    // 用... 将args展开传入
    const res = thisArg[fn](...args)
    delete thisArg['fn']
    // 返回调用结果
    return res
  }
  
  
  
  
  // 测试代码
  const person = {
    name: 'zhangsan'
  }
  
  function func(numA, numB) {
    console.log(this)
    console.log(numA, numB)
    return numA + numB
  }
  
  const res = func.myApply(person, [2, 8])
  console.log('返回值为:', res)