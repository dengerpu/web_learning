let str = "Hello, World"; // 创建一个 string 类型的字符串
let strObj = new String("Hello, World"); // 创建一个 String 对象
 
console.log(typeof str, str instanceof String); // string false
console.log(typeof strObj, strObj instanceof String); // object true

let arr = ['hello', new String('123'), 123, true, {}, [], null];
let res = arr.map(item => typeof item === 'string' || item instanceof String);
console.log('结果', res);