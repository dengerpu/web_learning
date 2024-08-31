// 给定一个升序整数数组[0,1,2,4,5,7,13,15,16]，找出其中连续出现的数字区间如下：
// ["0->2","4->5","7","13","15->16"]

function summaryRange(arr) {
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        let start = arr[i];
        let j = i;
        let temp = [];
        while(j + 1 < arr.length && arr[j] + 1 === arr[j + 1]) {
            temp.push(arr[j+1]);
            j++;
        }
        temp.length > 0 ? res.push(start + "->" + temp[temp.length - 1]) : res.push(start);
        i = j;
    }
    return res;
}
console.log(summaryRange([0,1,2,4,5,7,13,15,16]))