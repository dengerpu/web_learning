/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];
    for(let i = 1; i <= numRows; i++) {
        let path = new Array(i).fill(1);
        result.push([...path]);
        for(let j = 1; j < i - 1; j++) {
            console.log(i, j);
            result[i - 1][j] = result[i-2][j - 1] + result[i - 2][j];
        }
    }
    return result;
};
console.log(generate(1));
console.log(generate(2));
console.log(generate(3));
console.log(generate(4));
console.log(generate(5));