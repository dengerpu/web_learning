// @ts-ignore
Function.prototype.myBind = function (context: any, ...bindArgs: any[]) {
  // context是bind传入的this
  // bindArgs是bind传入的各个参数
  const self = this // 当前函数本身
  // 返回一个新的函数
  return function F(...args: any[]) {
    return self.apply(context, bindArgs.concat(args))
  }
}

// // 功能测试
// function fn(this: any, a: any, b: any, c: any) {
//     console.info(this, a, b, c)
// }
// @ts-ignore
// const fn1 = fn.myBind({x: 100}, 10)
// fn1(20, 30)