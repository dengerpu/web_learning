/***
 * 实现sleep函数
 */
function sleep(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, delay)
    })
}
(async function () {
    console.log(1);
    await sleep(5000);
    console.log(2);
})();
