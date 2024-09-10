function unflattenObject(obj) {
    let res = {};
    for (let key in obj) {
        let keys = key.split('.');
        let temp = res;
        for(let i = 0; i < keys.length; i++) {
            if(i === keys.length - 1) {
                temp[keys[i]] = obj[key];
                break;
            }
            if(!Object.hasOwnProperty.call(temp, keys[i])) {
                temp[keys[i]] = {}
            }
            temp = temp[keys[i]];
        }
    }
    return res;
}

let testObj = { 
    'a.b.c': 1,
    'd.e': [2,3],
};
console.log(unflattenObject(testObj)); // { a: { b: { c: 1 } }, d: { e: [2, 3] } }