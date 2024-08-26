// 1. 使用Array构造函数和fill()方法：
console.log(new Array(10).fill(1));
// 2. for循环
let arr = [];
for(let i = 0; i < 10; i++) {
    arr.push(1);
}
console.log(arr);
// 3. 使用Array.from()方法
console.log(Array.from({length: 10}, () => 1));
// 4. 使用扩展运算符和fill()方法
console.log([...new Array(10)].map(() => 1));
// 5. 字符串的repeat和split方法
console.log("1".repeat(10).split("").map(item => parseInt(item)));