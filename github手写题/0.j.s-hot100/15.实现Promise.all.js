// Promise.all方法
Promise.myAll = function(promises) {
    return new Promise((resolve, reject) => {
        try {
            const result = []; // 保存每个promise返回的结果
            let count = 0;
            let fufilledCount = 0; // 已完成数量
            for(const p of promises) {
                let i = count;
                count++;
                Promise.resolve(p).then(data => {
                    fufilledCount++;
                    result[i] = data;
                    // 全部都成功执行
                    if(fufilledCount === count) {
                        resolve(result);
                    }
                }, reject);
            }
            // 传递的是空数组
            if(count === 0) {
                resolve(result);
            }
        } catch(error) {
            reject(error);
            console.log('请求发生错误', error);
        }
    });
}
Promise.myAll([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.reject(3),
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