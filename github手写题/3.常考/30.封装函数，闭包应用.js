// 实现一个函数a，使其奇数次调用时返回1，偶数次调用时返回2（不能使用全局变量
let A = (function() {
    let index = 0;
    return function() {
        index++;
        if(index % 2 === 1) console.log(1);
        else console.log(2); 
    }
})();
A();
A();
A();
