/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let m = matrix.length, n = matrix[0].length;
    let left = 0, right = n - 1, top = 0, bottom = m - 1;
    let res = [];
    // 遵循左闭右开这个原则
    while(left <= right && top <= bottom) {
        // 向右
        for(let i = left; i < right; i++) {
            res.push(matrix[top][i]);
        }
        // 向下
        for(let i = top; i < bottom; i++) {
            res.push(matrix[i][right]);
        }
        if (left < right && top < bottom) {
            // 向左
            for(let i = right; i > left; i--) {
                res.push(matrix[bottom][i]);
            }
            // 向上
            for(let i = bottom; i > top; i--) {
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

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));