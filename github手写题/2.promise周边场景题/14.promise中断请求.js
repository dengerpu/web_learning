let showCancel = false;
const myrequest = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (showCancel) {
                reject(new Error('请求被取消'));
            } else {
                resolve('请求完成');
            }
        }, 1000);
    })
}

setTimeout(() => {
    showCancel = true
}, 500);

myrequest().then(res => {
    console.log('res', res);
}).catch(err => {
    console.log('err', err);
})