/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length <= 1) return intervals;
    // 先按照区间左端点进行升序排序
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [];
    for(let arr of intervals) {
        if(res.length === 0) {
            res.push(arr);
        } else {
            let top = res[res.length - 1][1]; // 取出最右区间
            if(arr[0] <= top) {
                res[res.length - 1][1] = Math.max(arr[1], top);
            } else {
                res.push(arr);
            }
        }
    }
    return res;
};