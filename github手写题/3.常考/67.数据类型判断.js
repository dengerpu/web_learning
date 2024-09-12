// 1.typeof判断数据类型
console.log(typeof 42);              // "number"
console.log(typeof 'Hello');         // "string"
console.log(typeof true);            // "boolean"
console.log(typeof undefined);       // "undefined"
console.log(typeof Symbol());        // "symbol"
console.log(typeof {a: 1});          // "object"
console.log(typeof [1, 2, 3]);       // "object" (数组也返回 "object")
console.log(typeof function(){});    // "function"
console.log(typeof null);            // "object" (这是一个已知的JavaScript bug)

// 2.instanceof判断数据类型
// instanceof 用于判断对象是否是某个构造函数的实例。
console.log([1, 2, 3] instanceof Array);       // true
console.log({a: 1} instanceof Object);         // true
console.log(function(){} instanceof Function); // true
console.log(new Date() instanceof Date);       // true
console.log(null instanceof Object);           // false

// 3.Array.isArray() 方法
// Array.isArray() 用于判断对象是否为数组。
console.log(Array.isArray([1, 2, 3]));       // true
console.log(Array.isArray({a: 1}));    // false

// 4.Object.prototype.toString.call() 方法
// 这是判断类型最通用和可靠的方法，尤其适合区分对象类型。
console.log(Object.prototype.toString.call(42));              // "[object Number]"
console.log(Object.prototype.toString.call('Hello'));         // "[object String]"
console.log(Object.prototype.toString.call(true));            // "[object Boolean]"
console.log(Object.prototype.toString.call(undefined));       // "[object Undefined]"
console.log(Object.prototype.toString.call(null));            // "[object Null]"
console.log(Object.prototype.toString.call(Symbol()));        // "[object Symbol]"
console.log(Object.prototype.toString.call({a: 1}));          // "[object Object]"
console.log(Object.prototype.toString.call([1, 2, 3]));       // "[object Array]"
console.log(Object.prototype.toString.call(function(){}));    // "[object Function]"
console.log(Object.prototype.toString.call(new Date()));      // "[object Date]"
console.log(Object.prototype.toString.call(/abc/));           // "[object RegExp]"

// 5. constructor 属性
// 每个对象（除 null 和 undefined）都有一个 constructor 属性，它指向创建该对象的构造函数。
console.log((42).constructor === Number);               // true
console.log(('Hello').constructor === String);          // true
console.log((true).constructor === Boolean);            // true
console.log(([]).constructor === Array);                // true
console.log(({}).constructor === Object);               // true
console.log((function() {}).constructor === Function);  // true
console.log((new Date()).constructor === Date);         // true

// 6. isNaN() 和 Number.isNaN()
// 用于判断是否为 NaN（Not-a-Number），Number.isNaN() 更为严格。
console.log(isNaN(NaN));              // true
console.log(isNaN('Hello'));          // true (因为 'Hello' 不能转换为数字)
console.log(Number.isNaN(NaN));       // true
console.log(Number.isNaN('Hello'));   // false

// 7. isFinite() 和 Number.isFinite()
// 用于判断是否为有限数值，Number.isFinite() 更为严格。

function getType(value) {
    if(value == null) return 'null';
    if(typeof value === 'undefined') return 'undefined';
    if(typeof value === 'object') {
        if(Array.isArray(value)) return 'array';
        if(value instanceof Date) return 'date';
        if(value instanceof RegExp) return 'regexp';
        if(value instanceof Function) return 'function';
        return 'object';
    }
    return typeof value;
}

// 利用Object.prototype.toString.call()
function getType2(value) {
    let type = Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}