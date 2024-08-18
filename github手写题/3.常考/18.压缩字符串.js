function compressStr(str) {
    if(str.length === 0 || str.length === 1) return str;
    let cur = str[0];
    let count = 1;
    let res = '';
    for(let i = 1; i < str.length; i++) {
        if(str[i] != cur) {
            res += `${cur}${count}`;
            cur = str[i];
            count = 1;
        } else {
            count++;
        }
    }
    res+=`${cur}${count}`;
    return res;
}
console.log(compressStr('abbccccaaa'));
console.log(compressStr('abbccccaab'));