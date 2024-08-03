function setTimeoutWithOffset(fn, interval, ...args) {
    let startTime = Date.now();
    let count = 0; // 执行技计数
    let timer = null;
    const task = () => {
        const offset = Date.now() - (startTime + count * interval);
        console.log(`第${count + 1}次 系统延迟时间${offset}`)//
        timer = setTimeout(() => {
            fn.apply(this, args);
            count++;
            task();
        }, interval - offset);
    }
    task();
    return () => clearTimeout(timer);
}
const stop =setTimeoutWithOffset(() => console.log(123), 1000);
setTimeout(() => {
    stop();
}, 5000);