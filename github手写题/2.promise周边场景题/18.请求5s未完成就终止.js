function _end() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("error");
        }, 5000);
    });
}
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('我还是会执行');
        resolve(1);
    }, 10000);
});
let promise2 = _end();
Promise.race([promise2, promise1])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

// 利用Promise.all
function sendRequestMock() {
    return new Promise(resovle => {
        setTimeout(() => {
            console.log('我也会执行');
            resovle("success")
        }, 4 * 1000);
    })
}

function timePromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('the request is interrupted, beacause of overtime')
        }, 3000);
    })
}

async function reqeustWithOvertime() {
    try {
        const result = await Promise.all([sendRequestMock(), timePromise()])
    } catch (error) {
        console.error(error)
    }
}

reqeustWithOvertime()