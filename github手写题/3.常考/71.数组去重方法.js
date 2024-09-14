// 1. set去重
// 2. 两层for循环，splice删除
// 3. filter + indexOf 判断是不是第一次出现
// 4. filter + includes
// 5. map存储再转为数组

/**
 * 判断两个对象是否相等
 * @param {*} obj1 
 * @param {*} obj2 
 * @returns 
 */
function check(obj1, obj2) {
    // 内存地址相同直接为true
    if(obj1 === obj2) {
        return true;
    }
    let obj1Keys = Object.keys(obj1);
    let obj2Keys = Object.keys(obj2);
    // 属性数量不同直接为false
    if(obj1Keys.length !== obj2Keys.length) {
        return false;
    }
    for(let key in obj1) {
        if(typeof obj1[key] === 'object' || typeof obj2[key] === 'object') {
            if(!check(obj1[key], obj2[key])) {
                return false;
            }
        } else if (obj1Keys[key] !== obj2Keys[key]) {
            return false;
        }
    }
    return true;
}

/**
 * 判断数组中是否包含某个对象
 * @param {*} itemObj 
 * @returns 
 */
Array.prototype.includesObj = function(itemObj) {
    console.log(this);
    let flag = false;
    for(let i = 0; i < this.length; i++) {
        if(check(this[i], itemObj)) {
            flag = true;
            break;
        }
    }
    return flag;
}

function unique(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(!newArr.includesObj(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let a = { a: 1 };
let b = { a: 1 };
let c = { b: 2 };
let nums = [a, b, c];

console.log(unique(nums));