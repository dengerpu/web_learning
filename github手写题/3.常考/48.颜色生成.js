// 1. 十六进制
function getRandomColor() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 16).toString(16);
    }
    return color;
}
console.log(getRandomColor());

// 2. rgb
function getRandomColor2() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}
console.log(getRandomColor2());

// 3. hsl
function getRandomColor3() {
    let h = Math.floor(Math.random() * 360);
    let s = Math.floor(Math.random() * 100);
    let l = Math.floor(Math.random() * 100);
    return `hsl(${h},${s}%,${l}%)`;
}
console.log(getRandomColor3());