function timeoutPromise(promise, timeout) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error(`Promise timed out after ${timeout} ms`));
        }, timeout)
        promise.then((res) => {
            clearTimeout(timer);
            resolve(res); 
        }).catch(error => {
            clearTimeout(timer);
            reject(error);
        })
    })
}

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('返回成功');
    }, 1000);
})
timeoutPromise(p, 500).then(res => {
    console.log('执行成功', res);
}).catch(err => {
    console.log('执行失败或者超时', err);
})