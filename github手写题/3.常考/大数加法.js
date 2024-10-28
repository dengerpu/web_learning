function bigAdd(str1, str2) {
    let len = Math.max(str1.length, str2.length);
    let prev = 0;
    let res = '';
    for(let i = len - 1; i >= 0; i--) {
        let x = str1[i] || 0;
        let y = str2[i] || 0;
        let sum = parseInt(x) + parseInt(y) + prev;
        prev = Math.floor(sum / 10);
        res = (sum % 10) + res;
    }
    if(prev > 0) {
        res = prev + res;
    }
    return res;
}
const num1 = "987654321987654321987654321";
const num2 = "123456789123456789123456789";
console.log(bigAdd(num1, num2));  // 输出: 1111111111111111111111111110