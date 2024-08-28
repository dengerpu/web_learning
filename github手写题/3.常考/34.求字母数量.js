function getStringNumber(str) {
    const len = str.length;
    const map = new Map();
    const res = {};
    for(let i = 0; i < len; i++) {
        map.has(str.charAt(i)) ? map.set(str.charAt(i), map.get(str.charAt(i)) + 1) : map.set(str.charAt(i), 1);
    }
    for(const key of map.keys()) {
        res[key] = map.get(key);
    }
    return res;
}
console.log(getStringNumber("hello world"));

// 或者直接使用集合
function getStringNumber2(str) {
    const len = str.length;
    const res = {};
    for(let i = 0; i < len; i++) {
        let c = str.charAt(i);
        if(res[c]) {
            res[c] = res[c] ++;
        } else {
            res[c] = 1;
        }
    }
    return res;
}
console.log(getStringNumber2("hello world"));
// 使用数组的reduce方法
function getStringNumber3(str) {
    let arr = str.split("");
    return arr.reduce((prev, curr) => {
        let c = curr;
        prev[c] ? prev[c]+= 1 : prev[c] = 1 
        return prev;
    }, {})
}
console.log(getStringNumber3("hello world"));
