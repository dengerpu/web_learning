function sum(a,b) {
    if(b) {
        return a + b;
    } else {
        return function(c) {
            return a + c;
        }
    }
}

function sum2() {
    let arg = arguments;
    if(arg.length === 2) {
        return arg[0] + arg[1];
    } else {
        return function(c) {
            return arg[0] + c;
        }
    }
}
console.log(sum(1,2)); // 3
console.log(sum(1)(2)); // 3
console.log(sum2(1,2)); // 3
console.log(sum2(1)(2)); // 3