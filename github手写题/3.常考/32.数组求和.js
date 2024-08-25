// 不用循环求和
const arr = []
// 求0~100000的和
for(let i =0;i<=1000;i++){arr.push(i)}

// 数学法
function getSum(arr) {
    return (arr[0] + arr[arr.length - 1]) * arr.length / 2;
}

// reduce
function getSum2(arr) {
    return arr.reduce((prev, curr) => prev + curr);
}

// 递归
function getSum3(arr) {
    const len = arr.length;
    if(len === 0) {
        return 0;
    }
    return arr[0] + getSum3(arr.slice(1));
}

// eval 函数
function getSum4(arr) {
    return eval(arr.join('+'));
}
console.log('数组求和结果', getSum(arr));
console.log('数组求和结果', getSum2(arr));
console.log('数组求和结果', getSum3(arr));
console.log('数组求和结果', getSum4(arr));
