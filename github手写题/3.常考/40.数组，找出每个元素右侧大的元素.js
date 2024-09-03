const num = [1, 3, 4, 2, 5, 6, 7];
// 单调递减栈
function nextGreaterElementIndex(num) {
    const res = new Array(num.length).fill(-1);
    const stack = [];
    for(let i = 0; i < num.length; i++) {
        while(stack.length && num[stack[stack.length - 1]] < num[i]) {
            res[stack.pop()] = i; // 保存的是索引
        }
        stack.push(i); // 将当前数索引入栈
    }
    return res;
}
console.log(nextGreaterElementIndex(num));
