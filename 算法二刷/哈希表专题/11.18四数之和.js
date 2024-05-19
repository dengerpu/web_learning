/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let res = [];
    let arr = [...nums];
    arr.sort((a, b) => a - b);
    let length = arr.length;
    for (let i = 0; i <= length - 4; i++) {
        if (arr[i] > target && arr[i] > 0) break; // 要去除负数这种情况
        // 对第一个数进行去重
        if (i > 0 && arr[i] === arr[i - 1]) continue;
        for (j = i + 1; j <= length - 3; j++) {
            // 2级剪枝
            if (arr[i] + arr[j] > target && arr[i] + arr[j] > 0) break;
            if (j > length - 2) break;
            // 对第二个数进行去重
            if(j > i + 1 && arr[j] === arr[j - 1]) continue;
            let left = j + 1, right = length - 1;
            while (left < right) {
                let sum = arr[i] + arr[j] + arr[left] + arr[right];
                if (sum === target) {
                    res.push([arr[i], arr[j], arr[left], arr[right]]);
                    while (left < right && arr[left] === arr[left + 1]) left++;
                    while (left < right && arr[right] === arr[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum > target) {
                    right--;
                } else {
                    left++;
                }
            }
        }
    }
    return res;




};
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));


