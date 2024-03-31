function mergeArrays(arr1, arr2) {
  let result = [];
  arr2.forEach(item => {
      // 将与arr2中元素匹配的arr1中的元素添加到结果数组
      const matches = arr1.filter(el => el.startsWith(item));
      result = [...result, ...matches, item];
  });
  result = result.concat(arr1.filter(el => !result.includes(el)));
  return result;
}

// 示例
const arr1 = ['A1', 'A2', 'B1', 'B2'];
const arr2 = ['A', 'B'];
console.log(mergeArrays(arr1, arr2)); // 输出: ['A1', 'A2', 'A', 'B1', 'B2', 'B']

const arr3 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const arr4 = ['A', 'B'];
console.log(mergeArrays(arr3, arr4));