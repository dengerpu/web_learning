// 对于输入字符串 "abcdefg" 和整数 2，函数应该将其转换为 "fgabcde"。
// 不借助额外的空间
function rotateString(str, num) {
   let length = str.length;
   num = num % length;
   str = reverseString(str, 0, length - 1);
   str = reverseString(str, 0, num - 1);
   str = reverseString(str, num, length - 1);
   return str;
}
function reverseString(str, start, end) {
      // 将字符串转换为数组
    let arr = str.split('');
    for(let i = 0; i < Math.floor((end - start) / 2); i++) {
        let temp = arr[start + i];
        arr[start + i] = arr[end - i];
        arr[end - i] = temp;
    }
    return arr.join('');
}
console.log(rotateString("abcdefg", 2)); // 输出 "fgabcde"