/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(grid == null || grid.length === 0) {
        return 0;
    }
    let m = grid.length, n = grid[0].length;
    let count = 0;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] == '1') {
                dfs(grid, i, j);
                count++;
            }
        }
    }
    return count;
};
// 深度优先搜索
var dfs = function(grid, row, column) {
    let m = grid.length, n = grid[0].length;
    if(row < 0 || column < 0 || row >= m || column >= n || grid[row][column] == '0') {
        return;
    }
    grid[row][column] = '0';
    dfs(grid, row - 1, column);
    dfs(grid, row + 1, column);
    dfs(grid, row, column - 1);
    dfs(grid, row, column + 1);
}

let grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
];
console.log(numIslands(grid));