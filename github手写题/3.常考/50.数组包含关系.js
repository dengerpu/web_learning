const A = [9, 1, 3, 5, 6, 7];
const B = [1, 3, 5, 6, 8, 7];
// 判断A、B数组的包含关系（值和数量），A属于B返回1，B属于A返回2，两者相等返回0，其他返回-1
function judge(A, B) {
    let str1 = A.sort((a, b) => a - b).join('');
    let str2 = B.sort((a, b) => a - b).join('');
    if(str1 === str2) return 0;
    if(str1.includes(str2)) return 1;
    if(str2.includes(str1)) return 2;
    return -1;
}
console.log(judge(A, B));

function judge2(A, B) {
    let key = true;
    for(const item of A) {
        if(!B.includes(item)) {
            key = false;
            break;
        }
    }
    if(key) {
        if(A.length === B.length) return 0;
        return 1; // 说明A属于B
    }
    key = true;
    for(const item of B) {
        if(!A.includes(item)) {
            key = false;
            break;
        }
    }
    if(key) {
        return 2; // 说明B属于A
    }
    return -1;
}
console.log(judge2(A, B));