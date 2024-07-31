function _setTimeout(fn, delay, ...args) {
    const timer = setInterval(() => {
        fn.apply(this, args);
        clearInterval(timer);
    }, delay);
}

_setTimeout(() => {
    console.log('1111');
},1000)