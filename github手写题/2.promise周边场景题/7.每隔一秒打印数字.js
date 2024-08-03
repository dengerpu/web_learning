function delay(i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(i);
            resolve();
        }, 1000);
    })
}
async function run() {
    for(let i = 0; i < 6; i++) {
        await delay(i);
    }
}
// run();

// let块级作用域
for(let i = 0; i < 6; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000)
}
// setTimeout传参
for(let i = 0; i < 6; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000, i);
}

// var作用域
for(var i = 0; i < 6; i++) {
    ((j) => setTimeout(() => {
        console.log(j); 
    }, j * 1000))(i);
}