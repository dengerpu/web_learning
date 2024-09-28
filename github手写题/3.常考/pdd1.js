function memoize(fn) {
    let lastThis = null;
    let lastArgs = null;
    let lastResult = null;
    return function(...args){
        // 检查this上下文和和参数是否和上一次相等
        const isSameThis = lastThis === this;
        const isSameArgs = lastArgs && args.length === lastArgs.length && args.every((args, index) => args === lastArgs[index]);
        // this和参数都相同，返回缓存的结果
        if(isSameThis && isSameArgs){
            // console.log('缓存',lastResult);
            return lastResult;
        }
        // 否则执行原函数并缓存结果
        lastThis = this;
        lastArgs = args;
        // console.log('this', this, 'args', args);
        lastResult = fn.apply(this, args);
        // console.log('执行', lastResult);
        return lastResult;
    }
    
}
// const func = (args1, args2) => {
//     return args1 + args2;
// }
// let me = memoize(func);
// me(1,2);
// me(1,2);
// me(1,3);
// me(1,2);

const functionThis = (b) => {
    return `${this.a}_${b}`;
}
let me2 = memoize(functionThis);
const a = {
    a: 1,
    me2
}
const b = {
    a: 2,
    me2
}
a.me2(2);
a.me2(2);
b.me2(2);
a.me2(3);