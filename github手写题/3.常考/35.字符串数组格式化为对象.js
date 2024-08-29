// 实现一个函数，
// 把一个字符串数组（[‘zm’, ‘za’, ‘b’, ‘lm’, ‘ln’, ‘k’]） 格式化成一个对象
// { ‘b’: [‘b’], ‘k’: [‘k’], ‘l’: [‘lm’, ‘ln’], ‘z’: [‘za’, ‘zm’] }

const arr = ['zm', 'za', 'b', 'lm', 'ln', 'k']
// 麻烦了。一次循环遍历即可
function parse(arr) {
    let obj = {};
    arr.forEach(item => {
        let key = item.slice(0,1);
        obj[key] = [];
    })
    for(let str of arr) {
        for(let key in obj) {
            if(str.slice(0, 1) === key) {
                obj[key].push(str);
            }
        }
    }
    return obj;
}
console.log(parse(arr));

function parse2(arr) {
    return arr.reduce((prev, curr) => {
        let key = curr.slice(0,1);
        prev[key] ? prev[key].push(curr) : prev[key] = [curr];
        return prev;
    }, {})
}
console.log(parse2(arr));