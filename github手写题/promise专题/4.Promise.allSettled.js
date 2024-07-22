// 实现Promise.allSettled
// 和Promise.all 要么全部成功，有错误就只会返回第一个错误的
Promise.myAllSettled = function(promises) {
    return new Promise((resolve, reject) => {
        let settledCount = 0; // 状态已经确定的promise数
        let count = 0; // promise总数
        const result = [];
        for(const prom of promises) {
            let i = count;
            count++;
            Promise.resolve(prom).then(
                data => {
                    settledCount++;
                    result[i] = {
                        status: "fullfilled",
                        value: data
                    }
                },
                reason => {
                    settledCount++;
                    result[i] = {
                        status: "rejected",
                        reason
                    }
                }
            ).finally(() => {
                if(settledCount >= count) {
                    resolve(result);
                }
            })
        }
    })
}

const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(3);
    }, 1000);
  });
  
  Promise.allSettled([pro, Promise.resolve(1), Promise.reject(2)]).then(
    (data) => {
      console.log(data);
    }
  );
  
  Promise.myAllSettled([pro, Promise.resolve(1), Promise.reject(2)]).then(
    (data) => {
      console.log(data);
    }
  );