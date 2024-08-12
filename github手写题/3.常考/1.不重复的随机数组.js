// 1. 简单版数组乱序
function generateRandomV1(num) {
    return num.sort(() => Math.random() - 0.5)
} 
const nums = [1,2,3,4,5,6,7,8,9];
console.log('生成的数组', generateRandomV1(nums));