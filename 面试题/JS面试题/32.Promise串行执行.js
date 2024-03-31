// Promise.queue = function(promiseFunctions) {
//   let results = [];
//   let p = Promise.resolve();
  
//   promiseFunctions.forEach(func => {
//       p = p.then(func).then(result => {
//           results.push(result);
//           console.log(p)
//           console.log(result)
//           return results;
//       });
//   });

//   return p;
// };

Promise.queue = function(promiseFunctions) {
  const results = []; // 创建一个空数组来存储所有promise的结果
  return promiseFunctions.reduce((prev, current) => {
      return prev.then(() => {
          return current().then(result => {
              results.push(result); // 将当前promise的结果添加到results数组中
              return results; // 返回更新后的results数组
          });
      });
  }, Promise.resolve()); // 最终返回包含所有结果的数组
}



// 测试示例
Promise.queue([
  () => new Promise(resolve => setTimeout(() => resolve('value1'), 1000)),
  () => new Promise(resolve => setTimeout(() => resolve('value2'), 2000)),
  () => new Promise(resolve => setTimeout(() => resolve('value3'), 3000))
]).then(values => {
  console.log(values); // [value1, value2, value3]
}).catch(err => {
  console.error(err);
});