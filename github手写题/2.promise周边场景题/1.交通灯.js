const funs = {
    red: function() {
        console.log('red');
    },
    green: function() {
        console.log('green');
    },
    yellow: function() {
        console.log('yellow');
    }
}
const task = function(timer, type, calllback) {
    setTimeout(() => {
        if(funs[type]) {
            funs[type]();
        }
        calllback();
    }, timer)
}
const step =  function() {
    task(3000, 'red', () => {
        task(2000, 'green', () => {
            task(1000, 'yellow', step)
        })
    });
}

// step();


// 基于Promise的方案解决
const promiseTask = (timer, type) => {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            if(funs[type]) {
                funs[type]();
            }
            reslove();
        }, timer)
    })
}
const promiseStep = () => {
    promiseTask(3000, 'red')
    .then(() => promiseTask(2000, 'green'))
    .then(() => promiseTask(1000, 'yellow'))
    .then(promiseStep)
}
// promiseStep();


// 基于 Async await语法
const taskRun = async () => {
    while(1) {
        await promiseTask(3000, 'red');
        await promiseTask(2000, 'green');
        await promiseTask(1000, 'yellow');
    }
}
taskRun();


