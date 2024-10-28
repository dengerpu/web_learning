function gcd(a, b) {
    while(b != 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
const num1 = 12;
const num2 = 18;
console.log("最大公因数:", gcd(num1, num2)); // 输出：6
console.log("最小公倍数:", lcm(num1, num2)); // 输出：36