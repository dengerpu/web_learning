// 类数组通常有以下几个特点：
// 1.具有 length 属性
// 2.按索引方式存储数据
// 3.不具有数组的 push、pop 等数组方法

let arguments = {0: 'a', 1: 'b', length: 2};
// 1.Array.from() 方法
let arr = Array.from(arguments);

// 2.扩展运算符 需要是一个可迭代对象
let arguments2 = {
    0: 'a',
    1: 'b',
    length: 2,
    [Symbol.iterator]: function* () {
        for (let i = 0; i < this.length; i++) {
            yield this[i];
        }
    }
};
let arr2 = [...arguments];

// 3.Array.prototype.slice.call()
let arr3 = Array.prototype.slice.call(arguments);

// 4.Array.apply(null, arguments)
let arr4 = Array.apply(null, arguments);

// 5.Array.prototype.concat.apply([], arguments)
let arr5 = Array.prototype.concat.apply([], arguments);

console.log(arr, arr3, arr4, arr5);
