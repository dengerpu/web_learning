let arr = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
    { id: 6, name: '部门6', pid: 0 },
]

// 列表转为树形结构
function listToArray(arr, pid) {
    let res = []
    arr.forEach(item => {
        if(item.pid === pid) {
            let temp = {id: item.id, name: item.name}
            let child = listToArray(arr, item.id);
            console.log('child', item.id , [...child]);
            // if(child.length > 0) {
            //     temp.children = child;
            // }
            res.push(temp);
        }
    })
    return res;
}
console.log(listToArray(arr, 0))