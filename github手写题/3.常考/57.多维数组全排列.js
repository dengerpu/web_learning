// testArr = [[1, 2], [3, 4], [5, 6]];
// 输出：[[1 ,3 ,5] ,[1 ,3 ,6] ,[1 ,4 ,5] ,[1 ,4 ，6] ,[2 ，3 ，5] ,[2 ，3 ，6] ,[2 ，4 ，5],[2，4，6]]

function generateCombinations(arr) {
    return arr.reduce((acc, val) => {
        return acc.map(v => val.map(item => [...v, item])).flat();
    }, [[]]);
}

let testArr = [[1, 2], [3, 4], [5, 6]];
console.log(generateCombinations(testArr));

// 回溯算法
function generateCombinations2(arr) {
    let res = [];
    let path = [];
    function backtrack(n) {
      if(n === arr.length) {
        res.push([...path]);
        return;
      }
      for(let i = 0; i < arr[n].length; i++) {
        path.push(arr[n][i]);
        backtrack(n + 1);
        path.pop();
      }
    }
    backtrack(0);
    return res;
}
console.log(generateCombinations2(testArr));