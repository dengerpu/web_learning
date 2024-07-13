// call方法，返回一个函数，参数支持多个
// 原理： 利用对象.方法来改变this
Function.prototype.call2 = function(context, ...args) {
    context = (context === undefined || context === null) ? window : context;
    context._fn = this;
    let res = context._fn(...args);
    delete context._fn;
    return res;
}

// apply方法，返回一个函数，参数接收一个数组
Function.prototype.apply2 = function(context, args) {
    context = (context === undefined || context === null) ? window : context;
    context._fn = this;
    let res = context._fn(...args);
    delete context._fn;
    return res;
}

// bind方法,返回的是一个函数，支持多个参数
Function.prototype.bind2 = function(context, ...args1) {
    context = (context === undefined || context === null) ? window : context;
    let _this = this;
    return function (...args2) {
        context._fn = _this;
        let res = context._fn(...[...args1, ...args2]);
        delete context._fn;
        return res;
    }


}

var fun = function() {
    console.log(this, arguments);
}
fun();
fun.call2({a: 1}, 1, 2, 3);
fun.apply2({b: 2}, [1, 2, 3]);
fun.bind2({c: 3}, [1,2,3])([4,5,6]);