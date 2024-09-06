let arr = ['c','o','o','p','e','r']

// 1.
// arr = [];
// console.log(arr);

// 2. 修改length长度
// arr.length = 0;
// console.log(arr);

// 3.splice
// arr.splice(0, arr.length);
// console.log(arr);

// 4. pop 或者 shift
// while(arr.length) {
//     arr.pop();
// }
// console.log(arr);

// 5.filter
// arr = arr.filter(() => false);
// console.log(arr);

// 6.fill
// arr.fill(undefined);
// console.log(arr);

arr = arr.slice(arr.length);
console.log(arr);