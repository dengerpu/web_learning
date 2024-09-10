function solution(arr, k) {
    const map = new Map();
    arr.forEach((item, index) => {
        map.set(index, item);
    })
    // 将map转化为数组，[[index,item],[index,item]...]
    let res = Array.from(map).sort((a, b) => a[1] - b[1]).slice(0, k).sort((a, b) => a[0] - b[0]);
    let result = [];
    res.forEach(item => {
        result.push(item[1]);
    })
    return result;
}
console.log(solution([1,2,3,4,5,3,2],4)) //[1, 2, 3, 2]
console.log(solution([1,2,3,4,5,3,2],3)) //[1, 2, 2]