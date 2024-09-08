let arr1 = ["A1", "A2", "B1", "B2", "C1", "C2",1]
let arr2 = ["A", "B", "C",1];
// res=['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C']

// 利用Set
let res = [...new Set([...arr1,...arr2])].sort();
console.log(res);

// filter
let merged = arr1.concat(arr2).sort().filter((item, index, arr) => {
    // arr.indexOf 找到的是第一个索引
    return arr.indexOf(item) === index;
})
console.log(merged);