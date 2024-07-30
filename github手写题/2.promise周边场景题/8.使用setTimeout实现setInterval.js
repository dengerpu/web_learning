function _setInterval(fn, delay=4, ...args) {
    let cancel = false;
    const task = () => {
        setTimeout(() => {
            if(!cancel) {
                fn.apply(this, args);
                task();
            }
        }, delay)
    }
    task();
    return () => { cancel = true };
}

let clearTimer = _setInterval(() => {
    console.log(1);
}, 1000);

setTimeout(() => {
    clearTimer(); // 10秒后关闭
}, 10000);