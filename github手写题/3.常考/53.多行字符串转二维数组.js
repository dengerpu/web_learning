const str = ` 1 21    3
4 5  6
7   8 9 `;        /* 多行字符串要用反引号 */
var arr = str.split('\n'); /* 根据换行符分割 */

let res = [];
for (let i = 0; i < arr.length; i++) {
    let temp = arr[i].trim().split(/\s+/); /* 去除空格，根据空格分割 */
    res.push(temp);
}
console.log(res);