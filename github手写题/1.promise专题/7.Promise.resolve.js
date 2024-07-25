/**
 * 判断一个数据是否是promise对象
 * @param {*} obj 
 * @returns 
 */
function isPromise(obj) {
    return !!(obj && typeof obj === "object" && typeof obj.then === "function");
}
Promise.myResolve = function(data) {
    if(data instanceof Promise) {
        return data;
    }
    return new Promise((resolve, reject) => {
        if(isPromise(data)) {
            data.then(resolve, reject);
        } else {
            resolve(data);
        }
    })
}