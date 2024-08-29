// 使用内置方法
const  x = 10;
console.log(x.toString(2));

// 手动实现
let y = 10;
let str = '';
while(y) {
    str += y & 1 ? '1' : 0;
    y >>= 1;
}
console.log(str.split('').reverse().join(''));