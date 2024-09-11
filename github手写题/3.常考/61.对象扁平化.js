// 递归
function flattenObject(obj, prefix = '', res = {}) {
    for(let key in obj) {
        let newKey = prefix ? `${prefix}.${key}` : key;
        if (typeof obj[key] === 'object') {
            flattenObject(obj[key], newKey, res);
        } else {
            res[newKey] = obj[key];
        }
    }
    return res;
}
// 2.堆栈
function flattenObjectStack(obj) {
    const stack =[[[], obj]];
    const res = {};

    while(stack.length > 0) {
        const [keys, value] = stack.pop();
        if(typeof value === 'object' && value !== null && !(value instanceof Date)) {
            for(let key in value) {
                stack.push([keys.concat(key), value[key]]);
            }
        } else {
            res[keys.join('.')] = value;
        }
    }
    return res;
}
// 对象扁平化
const nestedObject = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    }
};
console.log(flattenObject(nestedObject)); // { 'a': 1, 'b.c': 2, 'b.d.e': 3 }
console.log(flattenObjectStack(nestedObject)); // { 'a': 1, 'b.c': 2, 'b.d.e': 3 }