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

// 记录前面的值，只遍历一次
function summaryRange2(arr) {
    console.log('执行了');
    let res = [];
    let prev = arr[0];
    let start = arr[0];
    let key = false; // 是否连续
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] === prev + 1) {
            key = true;
        } else {
            if(key === true) {
                res.push(start + "->" + prev);
            } else {
                res.push(start + "");
            }
            start = arr[i];
            key = false;
        }
        prev = arr[i];

        // 处理最后一个元素
        if(i === arr.length - 1) {
            if(key === true) {
                res.push(start + "->" + prev);
            } else {
                res.push(start + "");
            }
        }
    }
    return res;
}
console.log(summaryRange2([0,1,2,4,5,7,13,15,16]))