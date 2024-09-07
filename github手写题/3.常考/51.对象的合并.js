var obj1 = {
    a: 1,
    b: {
        c: 2,
        d: 3
    },
    e: 4,
    h: {
        i: 5
    }
}
var obj2 = {
    a: 111,
    b: {
        c: 222,
        f: 333
    },
    g: 444,
    h: 666
}
// 实现一个mergeObject(obj1, obj2)方法，得到下面的对象，并转化成JSON输出到#app
var obj = {
    a: 111,
    b: {
        c: 222,
        d: 3,
        f: 333
    },
    e: 4,
    g: 444,
    h: 666
}

// 这个mergeObject方法的主要逻辑是:

// 遍历obj1,将其属性复制到新对象obj
// 遍历obj2,如果key在obj1中不存在,直接复制该key及value到obj
// 如果key在两者中都存在,且value为对象,递归调用mergeObject进行合并

function mergeObject(obj1, obj2) {
    let obj = {};
    for (let key in obj1) {
        if (typeof obj1[key] === 'object') {
            obj[key] = mergeObject(obj1[key], obj2[key]);
        } else {
            obj[key] = obj1[key];
        }
    }
    for(let key in obj2) {
        if(typeof obj2[key] === 'object') {
            obj[key] = mergeObject(obj1[key], obj2[key]);
        } else {
            obj[key] = obj2[key];
        }
    }
    return obj;
}
console.log(mergeObject(obj1, obj2));
console.log(JSON.stringify(Object.assign({}, obj1, obj2)))