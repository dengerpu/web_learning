/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 // 标记出0出现的位置
 var setZeroes = function(matrix) {
    let res = [];
    let m = matrix.length, n = matrix[0].length;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(matrix[i][j] === 0) {
                res.push([i,j]);
            }
        }
    }
    res.forEach(item => {
        for(let i = 0; i < n; i++) {
            matrix[item[0]][i] = 0;
        }
        for(let i = 0; i < m; i++) {
            matrix[i][item[1]] = 0;
        }
    })
};