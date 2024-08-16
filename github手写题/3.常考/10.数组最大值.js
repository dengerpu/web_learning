
function max(arr) {
    let res = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(res < arr[i]) {
            res = arr[i];
        }
    }
    return res;
}

// 三种方法
let arr = [5,2,7,9]
console.log(Math.max(...arr));
console.log(arr.sort()[arr.length-1]);
console.log(max(arr))