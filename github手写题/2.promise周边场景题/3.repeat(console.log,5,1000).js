// 回调方式解决
function repeat(fn, timer, wait) {
    return function calllback(...args) {
        setTimeout(() => {
            fn(...args);
            timer--;
            if(timer > 0) calllback(...args);

        }, wait);
    }
}
repeat(console.log, 5, 1000)('1111');


function runOneTask(fun, wait, ...args) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fun.call(this, ...args);
            resolve();
        }, wait);
    })
}
async function repeatPromise(fn, timer, wait) {
    for(let i = 0; i< timer; i++) {
        await runOneTask(fn, wait, i);
    }
}
repeatPromise(console.log, 5, 1000);