/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// 拓扑排序-利用深度优先搜索
var canFinish = function(numCourses, prerequisites) {
    let visited = new Array(numCourses).fill(0);
    let graph = new Map();
    let valid = true;
    for(let index = 0; index < numCourses; index++) {
        graph.set(index, []);
    }
    for(const course of prerequisites) {
        graph.get(course[1]).push(course[0]);
    }
    for(let i = 0; i < numCourses && valid; i++) {
        if(visited[i] === 0) {
            dfs(i);
        }
    }
    function dfs(u) {
        visited[u] = 1; // 访问过
        for(let v of graph.get(u)) {
            if(visited[v] === 0) {
                dfs(v);
                if(!valid) {
                    return;
                }
            } else if (visited[v] === 1) { // 已经被访问过。说明构成环
                valid = false;
                return;
            }
        }
        visited[u] = 2;
     }
    return valid;
};
