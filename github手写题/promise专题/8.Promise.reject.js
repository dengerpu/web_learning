/**
 * 得到一个被拒绝的Promise
 * @param {*} reason 
 * @returns 
 */
Promise.myReject = function(reason) {
    return new Promise((resolve, reject) => {
        reject(reason);
    })
}