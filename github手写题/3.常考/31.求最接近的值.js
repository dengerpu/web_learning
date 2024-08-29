const arr = [3, 56, 56, 23, 7, 76, -2, 345, 45, 76, 3];
const num = 37;
function getClose(num, arr) {
    let res = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(Math.abs(arr[i] - num) < Math.abs(res - num)) {
            res = arr[i];
        }
    }
    return res;
}
const res = getClose(num, arr);
console.log(res);