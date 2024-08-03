// node环境下需要使用commonjs
// import { myPromise } from "./1.实现PromiseA+";
// const myPromise = require("./1.实现PromiseA+");

Promise.all = function(promises) {
    return new Promise((resolve, reject) => {
       try {
        const result = []; // 保存返回结果
        let fulfilledCount = 0; // 已完成的数量
        let count = 0; // promise计数
        for(const p of promises) {
            let i = count;
            count++;
            Promise.resolve(p).then(data => {
                fulfilledCount++;
                resolve[i] = data;
                if(fulfilledCount === count) {
                    resolve(result);
                }
            }, reject);
        }
        // 传递为空数组的情况
        if(count === 0) {
            resolve(results);
        }
       } catch (error) {
        reject(error);
       }
    });
}

/**
 * 不仅可以传数组，还可以传递迭代器。不是所有迭代器都支持for循环，所以。。。
 */
Promise.all([
    Promise.reject(1),
    Promise.resolve(2),
    Promise.resolve(3),
    4,
  ]).then(
    (data) => {
      // data:[1,2,3,4]
      // 传递[pro1,pro2,pro3,4]的话:内部默认处理Promise.resolve(4)
      console.log("成功", data);
    },
    (reason) => {
      // reason:reason2
      console.log("失败", reason);
    }
  );