function load() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('执行成功');
            resolve(1);
        }, 1000)
    }) 
}
function timeout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('超时');
        }, 500);
    })
}
Promise.race([load(), timeout()]).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})