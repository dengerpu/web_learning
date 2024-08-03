const deepClone = (target, map = new WeakMap()) => {
    // 基本类型直接返回
    if(typeof target !== 'object' || target === null) return target;
    // 函数 正则 日期 ES6对象，执行构造函数
    const constructor = target.constructor;
    if(/^(Function|RegExp|Date|Map|Set)$/i.test(constructor.name)) return new constructor(target);
    // map 标记每一个出现过的属性，避免循环引用
    if(map.get(target)) return map.get(target);
    map.set(target, true);
    const cloneTarget = Array.isArray(target) ? [] : {};
    for(const prop in target) {
        cloneTarget[prop] = deepClone(target[prop], map);
    }
    return cloneTarget;
}

let a = [{
    b: 1,
    c: {
        d: {
            e: 3
        }
    }
}]
let obj = deepClone(a);
obj[0].c.d.e = 123;
console.log(obj);
console.log(a);