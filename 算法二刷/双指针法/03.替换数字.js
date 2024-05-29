function replaceNumber(str) {
  let count = 0;
  let arr = str.split('');
  for (let i = 0; i < str.length; i++) {
    if(arr[i] >= '0' && arr[i] <= '9') {
      count++;
    }
  }
  let slow = arr.length - 1;
  let fast = arr.length - 1 + count * 5;
  while(slow >= 0) {
    if(arr[slow] >= '0' && arr[slow] <= '9') {
      arr[fast--] = 'r';
      arr[fast--] = 'e';
      arr[fast--] = 'b';
      arr[fast--] = 'm';
      arr[fast--] = 'u';
      arr[fast--] = 'n';
    } else {
      arr[fast--] = arr[slow];
    }
    slow--;
  }
  return arr.join('');
}
console.log(replaceNumber('abc123def456ghi789'));