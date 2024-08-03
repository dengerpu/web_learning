// bind 的polyfill方法
// bind方法返回一个函数  
// 参考链接： https://blog.csdn.net/haishangfeie/article/details/79913698
 Function.prototype.bind2 = function(oThis) {
    if(typeof this !== 'function') {
        throw new TypeError('不是一个函数');
    }
    // 获取传递的参数（除了this）
    var aArgs = Array.prototype.splice.call(arguments, 1), 
    fToBind = this,
    fNOP = function() {},
    fBound = function() {
        // 如果是通过new的方式掉用这个函数，返回一个函数 
        return fToBind.apply(
            this instanceof fNOP && oThis ? this : oThis, // 第一个参数，this
            aArgs.concat( Array.prototype.slice.call(arguments) ) // 第二个参数
        );
    }
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
 }
var fn = function() {
    console.log('arguments:', arguments);
    console.log('this:', this);
}

const newFn = fn.bind2('ctx', 1, 2);
// const result = newFn(3, 4);
// 可能通过new 来掉用这个函数
const result = new newFn(3, 4);
console.log(result);