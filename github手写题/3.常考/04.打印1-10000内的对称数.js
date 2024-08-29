function isSystem(start, end) {
    let res = [];
    for(let i = start; i <= end; i++) {
        let str = String(i);
        if(str.length <= 1) continue;
        if(str.split("").reverse().join("") === str) {
            res.push(Number(str));
        }
    }
    return res;
}
console.log(isSystem(1, 10000));