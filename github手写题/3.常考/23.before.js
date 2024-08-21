// before(num,fn)接受两个参数，第一个参数是数字，第二个参数是函数，
// 调用before函数num次数以内，返回与fn执行相同的结果，超过num次数返回最后一次fn的执行结果。
function before(num, fn) {
    let count = 0;
    let beforeNums;
    return function(...args) {
        if(num > count) {
            beforeNums = fn(...args);
        }
        count += 1;
        return beforeNums;
    }
}
let func = before(3, (a, b) => a + b)
console.log(func(1, 2)); // 3
console.log(func(2, 3)); // 5
console.log(func(1, 6)); // 7
console.log(func(1, 8)); // 7