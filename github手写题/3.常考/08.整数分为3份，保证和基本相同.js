function getSumArr(arr) {
    let res = [{sum: 0, arr: []}, {sum: 0, arr: []}, {sum: 0, arr: []}];
    // 将数组从小到大排序
    arr = arr.slice().sort((a, b) => b - a);
    arr.forEach(item => {
        let min = res.sort((a, b) => a.sum - b.sum)[0];
        min.sum += item;
        min.arr.push(item)
    })
    return res;
}
let a = [11, 42, 23, 4, 5, 6, 4, 5, 6, 11, 23, 42, 56, 78, 90];
console.log(getSumArr(a));