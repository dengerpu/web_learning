function uncompress(origin) {
    let stack = [];
    let num = 0;
    let currentStr = "";
    for(let char of origin) {
        if(!isNaN(char)) {
            num = num * 10 + Number(char);
        } else if (char ==='('){
            stack.push([currentStr, num]);
            currentStr = "";
            num = 0;
        } else if (char === ')'){
            let [prevStr, repeatCount] = stack.pop();
            currentStr = prevStr + currentStr.repeat(repeatCount);
        } else {
            currentStr += char;
        }
    }
    return currentStr;
}
console.log(uncompress('ab'));
console.log(uncompress('3(ab)'));
console.log(uncompress('xy3(ab)'));
console.log(uncompress('3(ab2(c))'));