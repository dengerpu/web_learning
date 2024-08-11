Function.prototype.myApply = function (context, args) {
    // 判断是否是函数调用
    if (typeof this !== 'function') {
        throw new TypeError(this + 'is not a function')
    }
    // 判断context是否是对象
    context = context || window
    // 判断args是否是数组
    args = args || []
    // 生成唯一key
    const key = Symbol()
    // 将函数赋值给context的key
    context[key] = this
    // 调用函数并返回结果
    const result = context[key](...args)
    // 删除key
    delete context[key]
    // 返回结果
    return result
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