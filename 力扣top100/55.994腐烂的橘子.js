/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let queue = [];
    let fresh = 0; // 新鲜橘子数量
    let m = grid.length, n = grid[0].length;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === '1') {
                fresh++;
            }
            if(grid[i][j] === '2') {
                queue.push([i , j]);
            }
        }
    }
    while(fresh > 0 && queue.length > 0) {
        
    }
};