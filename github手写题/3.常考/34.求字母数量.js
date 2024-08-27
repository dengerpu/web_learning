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
console.log(getStringNumber("hello world")); // { l: 3, o: 2 }

// 或者直接使用集合
function getStringNumber2(str) {
    const len = str.length;
    const res = {};
    for(let i = 0; i < len; i++) {
        let c = str.charAt(i);
        // if()
    }
    return res;
}
console.log(getStringNumber("hello world")); // { l: 3, o: 2 }