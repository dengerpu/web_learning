function pipe(...fns) {
    return function(...args) {
        if(fns.length === 0) return;
        if(fns.length === 1) return fns[0](...args);

        return fns.reduce((pre, cur) => {
            if(typeof pre === 'function') {
                pre = pre(...args);
                args = []
            }
            return cur(pre); // 传入上一次的结果
        })
    }
}

function add2(x) {
    return x + 2;
}

function multiply3(x) {
    return x * 3;
}

function subtract4(x) {
    return x - 4;
}

// 使用管道函数
const operate = pipe(add2, multiply3, subtract4);

console.log(operate(5)); // 输出结果为 17 -> ((5 + 2) * 3) - 4 = 17