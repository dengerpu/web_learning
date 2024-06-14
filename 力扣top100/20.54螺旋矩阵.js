/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let m = matrix.length, n = matrix[0].length;
    let left = 0, right = n - 1, top = 0, bottom = m - 1;
    let res = [];
    while (left <= right && top <= bottom) {
        // 向右
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }
        // 向下
        for (let i = top + 1; i <= bottom; i++) {
            res.push(matrix[i][right]);
        }
        // 解决只有一行
        if (left < right && top < bottom) {
            // 向左
            for (let i = right - 1 ; i > left; i--) {
                res.push(matrix[bottom][i]);
            }
            // 向上
            for (let i = bottom; i > top; i--) {
                res.push(matrix[i][left]);
            }
        }
        left++;
        top++;
        right--;
        bottom--;
    }
    return res;
};