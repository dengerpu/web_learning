/**
 * 无论成功还是失败都会回调
 * finally没有参数，finally会将结果和error传递
 * @param {*} onSettled 
 * @returns 
 */
Promise.prototype.finally = function (onSettled) {
    return this.then(
        async (data) => {
            // onSettled();
            await Promise.resolve(onSettled(data));
            return data;
        },
        async (reason) => {
            // onSettled();
            await Promise.resolve(onSettled(reason));
            throw reason;
        }
    )
}

/******test finally*******/
// 无论什么结果，都会运行
const pro = new Promise((resolve, reject) => {
    resolve(1);
});
const pro2 = pro.finally((d) => {
    console.log("finally", d); // 收不到d参数
    // 本身不改变状态，但是抛出一个错误，数据就会变成它的错误
    // throw 123;
    return 123; //不起作用
});
setTimeout(() => {
    console.log(pro2);
});