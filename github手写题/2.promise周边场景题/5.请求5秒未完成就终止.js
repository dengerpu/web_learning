// fetch请求取消
// const abort = new AbortController();
// let res = null;
// fetch(url, {
//     signal: abort.signal
// }).then(_res => res = _res);

// setTimeout(() => {
//     if(!res) abort.abort();
// }, 5000);


const funWait = (call, timeout = 5000) => {
    let wait = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('请求超时');
        }, timeout);
    })
    return Promise.race([call(), wait]);
}

// 也可以自己实现
const funWait2 = (promise, timeout = 5000) => {
    return new Promise((resolve, reject) => {
        let timer = setTimeout(() => {
            reject('请求超时');
        }, timeout);
        promise.then(res => {
            clearTimeout(timer);
            resolve(res);
        }).catch(err => {
            clearTimeout(timer);
            reject(err);
        }).finally(() => {
            clearTimeout(timer);
        })
    })
}


const t = () => new Promise(resolve => setTimeout(resolve, 4000))
const t2 = () => new Promise(resolve => setTimeout(resolve, 6000))
funWait(t).then(res => {
  console.log("t1 resolve")
}).catch(err => {
  console.log("t1 timeout")
})
funWait(t2).then(res => {
  console.log("t2 resolve")
}).catch(err => {
  console.log("t2 timeout", err)
})


