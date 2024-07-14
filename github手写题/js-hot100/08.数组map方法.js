// 实现数组的map方法
// 接收两个参数，一个参数是callbackFn(element, index, array)， 另一个参数是thisArgs，执行callbackFn时的this
Array.prototype.map2 = function(cb, thisBinding) {
    if(typeof cb !== 'function'){
        throw new TypeError(`${cb} is not a function`);
    }
    // 排除this非可迭代对象情况
    if(this == null || typeof this[Symbol.iterator] !== 'function') {
        throw new TypeError(`${this} is not a iterable`);
    }
    // 将可迭代对象转换成数组
    const array = [...this];
    const result = [];
    for(let i = 0; i < array.length; i++) {
        result.push(cb.call(thisBinding, array[i], i , array));
    }
    return result;
}

let arr = [1, 2, 3];
console.log(arr.map2(item => item * 2));