/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // 遵循坐闭右开的原则
    let m = matrix.length, n = matrix[0].length;
    let left = 0, right = n - 1, top = 0, bottom = m - 1;
    let res = [];
    while(left <= right && top <= bottom) {
        // 向右
        for(let i = left; i < right; i++) {
            res.push(matrix[left][i]);
        }
        left++;
        // 向下
        for(let i = top; i < bottom; i++) {
            res.push(matrix[i][right]);
        }
        top++;
        // 向左
        for(let i = right; i >= left; i++) {
            
        }
    }
};