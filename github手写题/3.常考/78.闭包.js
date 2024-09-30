// 1. 持有了不再需要的函数引用，
// 会导致函数关联的词法环境无法销毁，从而导致了内存泄漏

// 2.当多个函数共享词法环境时，会到此词法环境膨胀，
// 从而导致出现无法触达也无法回收的内存空间

for(var i=0;i<10;i++){
    setTimeout(() => console.log('val:',i)) // 输出10个10
}

for(var i=0;i<10;i++){
    setTimeout(((val)=>
        console.log('val:',val)).bind(null,i) // 输出0-9
    );
}

const ref ={current:null};
for(var i=0;i<10;i++){ 
    ref.current =i;
    setTimeout(((val)=>
        // ref.current 是一个对象的属性，所有的 setTimeout 共享这个对象引用。
        // 由于 ref.current 在循环结束时是 9，所以每次输出的都是 9。
        console.log('val:',val.current)).bind(null,ref) //输出10个9
    );
}

for(var i=0;i<10;i++){
    let t = i;
    setTimeout((val)=>
        // 使用了 let 声明局部变量 t，每次循环都有一个新的 t，并且 setTimeout 回调捕获的是这个 t 的值，因此输出正确的 0 到 9。
        console.log('val:',t) // 输出0-9
    );
}
