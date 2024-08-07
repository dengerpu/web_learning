// 实现lodash.get方法
function _get(obj, path, defaultValue="undefined") {
    // 将path处理成统一格式
    let newPath = [];
    if(Array.isArray(path)) {
        newPath = path;
    } else {
        // 字符串类型 obj[a] obj.a  这里把'[' 替换成'.' ']' 替换成''
        newPath = path.replace(/\[/g, '.').replace(/\]/g, '').split('.'); // 统一转换为数组处理
    }
    return newPath.reduce((o, k) => {
        return (o || {})[k];
    }, obj) || defaultValue; 
}

var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
console.log(_get(object, 'a[0].b.c'));;
// => 3
 
console.log(_get(object, ['a', '0', 'b', 'c']));;
// => 3
 
console.log(_get(object, 'a.b.c', 'default'));;
// => 'default'