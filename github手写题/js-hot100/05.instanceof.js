function myInstanceof(left, right) {
    // 由于Object.propotype.__propto__已经被弃用，不推荐这种使用方式
    // while(left) {
    //     if(left.__proto__ === right.prototype) {
    //         return true
    //     }
    //     left = left.__proto__
    // }
    // return false

    let leftProto = Object.getPrototypeOf(left)
    while(leftProto) {
        if(leftProto === right.prototype) {
            return true
        }
        leftProto = Object.getPrototypeOf(leftProto)
    }
    return false
};
console.log(myInstanceof([], {}))