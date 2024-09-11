
function partial(fn,...args){
    if(typeof fn !== 'function'){
        throw new TypeError('fn must be a function')
    }
    return function(...args2){
        return fn.apply(fn, args.concat(args2));
    }
}
function a(a, b, c) {
    console.log(a, b, c)
}

const fn = partial(a, 1, 2)
fn(3) // 1 2 3