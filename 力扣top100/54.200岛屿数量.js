/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let m = grid.length, n = grid[0].length;
    let count = 0;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === '1') {
                dfs(grid,i,j,m,n);
                count++;
            } 
        }
    }
    return count;
};
var dfs = function(grid, i, j, m, n) {
    if(i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === '0' ) {
        return;
    }
    grid[i][j] = '0';
    dfs(grid, i, j-1, m, n);
    dfs(grid, i, j+1, m, n);
    dfs(grid, i-1, j, m, n);
    dfs(grid, i+1, j, m, n);
}