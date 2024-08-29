// 1, 1, 2, 3, 5, 8, 13, 21, ...
function fib(n) {
    if(n <= 2) {
        return n;
    }
    return fib(n - 1) + fib( n - 2);
}
for(let i = 1; i <= 5; i++) {
    console.log(fib(i));
}

// 尾递归
function Fib(n, num = 1, sum = 1) {
    if(n <= 2) {
        return sum;
    }
    return Fib(n - 1, sum, num + sum);
}

for(let i = 1; i <= 5; i++) {
    console.log(Fib(i));
    console.log(Fib2(i));
}

// 迭代方式
function Fib2(n) {
    let prev = 1, curr = 1;
    for(let i = 2; i < n; i++) {
        let temp = curr;
        curr = curr + prev;
        prev = temp;
    }
    return curr;
}