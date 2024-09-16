function fn1(x) {
    console.log('执行fn1', x);
    return x + 1;
  }
  function fn2(x) {
    console.log('执行fn2', x);
    return x * 2;
  }
  function fn3(x) {
    console.log('执行fn3', x);
    return x - 1;
  }
  function compose(...fn) {
      if(fn.length === 0) {
          return (x) => x;
      }
      if(fn.length === 1) {
          return fn[0];
      }
      // return (x) => {
      //     return fn.reduce((pre, cur) => {
      //         return cur(pre);
      //     }, x);
      // }
      return fn.reduce((pre, cur) => {
          return (...args) => {
              return pre(cur(...args));
          }
      })
  }
  const fn = compose(fn1, fn2, fn3);
  console.log(fn(2)); // 3
  