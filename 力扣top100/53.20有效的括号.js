/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(str) {
    let stack = [];
    let leftBacket = ['(', '[', '{'];
    for(let s of str) {
        console.log(s);
        if(leftBacket.includes(s)) {
            stack.push(s);
        } else {
            if(stack.length > 0) {
                let top = stack.pop();
                console.log(top, s);
                if(!isMate(top, s)) {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};
var isMate = function(left, right) {
    if((left === '(' && right === ')') || (left === '[' && right === ']') || (left === '{' && right === '}')) {
        return true;
    } 
    return false;
}
console.log(isValid('()'));

