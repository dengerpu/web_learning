function removechars(str) {
    let stack = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i] === 'b') continue;
        if((str[i] === 'a' && stack[stack.length - 1] === 'c') || (str[i] === 'c' && stack[stack.length - 1] === 'a')) {
            // 如果当前字符与堆栈顶部字符可以配对，则弹出顶部字符
            stack.pop();
        } else {
            stack.push(str[i]);
        }
    }
    return stack.join('');
}

console.log(removechars('aacbd'));
console.log(removechars('aabcd'));
console.log(removechars('aaabbccc'));