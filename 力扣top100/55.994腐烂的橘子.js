/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let queue = [];
    let fresh = 0; // 新鲜橘子数量
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];
    let step = 0; // 感染次数
    let m = grid.length, n = grid[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                fresh++;
            }
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            }
        }
    }
    while (fresh > 0 && queue.length > 0) {
        step++;
        //队列中现有的所有腐烂橘子都要进行一次感染
        let size = queue.length;
        for (let s = 0; s < size; s++) {
            let top = queue.shift();
            for (let i = 0; i < 4; i++) {
                let x = top[0] + dx[i];
                let y = top[1] + dy[i];
                // 合法，切为新鲜橘子
                if ((x >= 0 && x < m) && (y >= 0 && y < n) && grid[x][y] == 1) {
                    grid[x][y] = 2
                    queue.push([x, y]);
                    fresh--;
                }
            }
        }
    }
    //感染完了之后如果还有新鲜橘子
    if (fresh > 0) {
        return -1;
    } else {
        return step;
    }
};