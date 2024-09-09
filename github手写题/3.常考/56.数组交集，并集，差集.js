const arr1 = [1, 2, 3, 4, 3]
const arr2 = [1, 3, 5, 6, 7]
// 并集
function Union(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])]
}
console.log(Union(arr1, arr2))

// 交集
function Intersection(arr1, arr2) {
    // 先对数组arr1去重
    let set = new Set(arr1);
    const res = [];
    for (let i = 0; i < arr2.length; i++) {
        // 找出公有的部分，并去重
        if(set.has(arr2[i]) && res.indexOf(arr2[i]) === -1) {
            res.push(arr2[i])
        }
    }
    return res;
}
console.log(Intersection(arr1, arr2));

// 差集(除了交集之外的)
function Difference(arr1, arr2) {
    const arr = [...new Set([...arr1, ...arr2])];
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        // 交集说明是arr1和arr2都有的元素
        // arr1.indexOf(arr[i]) !== -1 && arr2.indexOf(arr[i]) !== -1
        if(arr1.indexOf(arr[i]) === -1 || arr2.indexOf(arr[i]) === -1) {
            res.push(arr[i])
        }
    }
    return res;
}
console.log(Difference(arr1, arr2))