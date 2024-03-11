// @ts-ignore
Function.prototype.myApply = function (context: any, args: any[] = []) {
  if(context == null) context = window
  // 值类型，变为对象
  if(typeof context !== 'object') context =  new Object(context)

  const fnKey = Symbol() // 不会出现属性名称的覆盖
  context[fnKey] = this // 对象fnKey属性绑定当前的方法

  const result = context[fnKey](...args)

  delete context[fnKey]// 清理掉 fn ，防止污染

  return result
}

// @ts-ignore
Function.prototype.myCall = function (context: any, ...args: any[]) {
  if(context == null) context = window
  // 值类型变为对象
  if(typeof context !== 'object') context =  new Object(context)

  const fnKey = Symbol() // 不会出现属性名覆盖
  context[fnKey] = this // 对象fnKey属性绑定当前的方法
  const result = context[fnKey](...args)

  delete context[fnKey] // 清理掉 fn ，防止污染
  return result
}

// function fn(this: any, a: any, b: any, c: any) {
//   console.info(this, a, b, c)
// }
// // @ts-ignore
// fn.myCall({x: 100}, 10, 20, 30)
// // @ts-ignore
// fn.myApply({x: 200}, [100, 200, 300])