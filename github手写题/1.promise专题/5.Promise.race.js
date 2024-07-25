// 实现Promise.race

/**
 * 返回的Promise与第一个有结果的一致
 * 在 Promise.race() 方法中，一旦有一个 Promise 完成（无论是 resolved 还是 rejected），
 * 整个 Promise.race() 就会结束，并返回该 Promise 的结果。但是，其他未完成的 Promise 仍然会继续执行，
 * 只是 Promise.race() 不会等待它们完成或返回它们的结果。
 * @param {*} promises 
 * @returns 
 */
Promise.myRace = function (promises) {
    return new Promise((resolve, reject) => {
        for (const p of promises) {
            Promise.resolve(p).then(resolve, reject);
        }
    })
}
let p1 = new Promise(resolve => {
    setTimeout(() => {
        console.log('p1其实我执行了');
        resolve(1)
    }, 100)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(2)
    })
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3)
    })
})

Promise.myRace([p1, p2, p3]).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})