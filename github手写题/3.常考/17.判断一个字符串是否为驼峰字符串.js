function isValid(str, judge) {
    let j = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === judge[j] && j < judge.length) j++;
    }
    return j === judge.length;
}
console.log(isValid("Bytedance", "BD"));
console.log(isValid("ByteDance", "BD"));