Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new Error('不是一个函数');
  }
  // 函数本身
  var self = this;
  // 去掉参数中的this
  var args = Array.prototype.slice.call(arguments, 1);

  // 返回一个函数
  return function fBound() {
    var bindArgs = Array.prototype.slice.call(arguments);
    var allArgs = args.concat(bindArgs);
    // 如果是使用new的方式调用的这个函数
    if(Object.getPrototypeOf(this) === fBound.prototype) {
      // return new self(...allArgs); // 这个是es6的写法
      var obj = {}
      Object.setPrototypeOf(obj, self.prototype);
      self.apply(obj, allArgs);
      return obj;
    } else {
      return self.apply(context, allArgs);
    }
  }
}
function fn(a,b,c) {
  console.log(a,b,c)
  console.log(this)
  return 123
}
const newFn = fn.myBind({name: 'zs'}, '123');
const result = new newFn('456', '789');
console.log(result)