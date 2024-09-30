const p = new Promise((res, rej) => { 
    res(1); 
});

async function asyncReturn() { 
    return p;  // 带不带await都会被包裹一个新的promise
}

function resolveReturn() { 
    return Promise.resolve(p); 
    // return p // 结果也是true
}
console.log('直接输出p', p);
setTimeout(() => {
    console.log('延迟p', p);
}, 1000)

console.log(asyncReturn());
console.log(resolveReturn());
console.log(p === asyncReturn()); // false
console.log(p === resolveReturn()); // true