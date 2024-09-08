const targetArray = [1, [2, 3], 4];
const formater = '[a, [b], c]';
const formaterArray = ['a', ['b'], 'c'];

const destructuringArray = (values, keys) => {
    console.log('传入的内容', keys);
    try {
        const obj = {};
        if(typeof keys === 'string') {
            // 将包裹的单引号字母替换为双引号，以符合json格式
            keys = JSON.parse(keys.replace(/([a-zA-Z]+)/g, '"$1"'));
            console.log('keys', keys);
        }
        const iterare = (values, keys) => {
            keys.forEach((key, i) => {
                if(Array.isArray(key)) {
                    iterare(values[i], key);
                } else {
                    obj[key] = values[i];
                }
            })
        }
        iterare(values, keys);
        return obj;
    } catch(e) {
        console.error(e.message);
    }
}
console.dir(destructuringArray(targetArray, formater));
console.log(destructuringArray(targetArray, formaterArray));
// console.log(JSON.parse(formater.replace(/([a-zA-Z]+)/g, '"$1"')));