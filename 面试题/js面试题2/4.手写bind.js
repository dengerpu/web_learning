Function.prototype.myBind = function (context) {
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
  }
  const fn = this;
  const args = Array.prototype.slice.call(arguments, 1);
  return function A() {
    const bindArgs = Array.prototype.slice.call(arguments);
    // 处理new的情况
    if(Object.getPrototypeOf(this) === A.prototype){
        // return new fn(...args, ...bindArgs);
        // 或者手写new的过程
        let obj = {};
        Object.setPrototypeOf(obj, fn.prototype);
        let result = fn.apply(obj, args.concat(bindArgs));
        return result;
    } else {
        return fn.apply(context, args.concat(bindArgs));
    }
  };
};

// 测试
function foo() {
  console.log(this.name);
}

const obj = {
  name: "obj",
};

const bar = foo.myBind(obj);
bar(); // 输出 "obj"