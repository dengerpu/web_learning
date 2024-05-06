/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 方法一： 对字符串进行排序，排序结果相同即为字母异位词
var groupAnagrams = function(strs) {
  let map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i];
    let strArr = [...str];
    strArr.sort();
    let str2 = strArr.join('');
    if(map.has(str2)) {
      map.get(str2).push(str);
    } else {
      map.set(str2, [str]);
    }
  }
  return [...map.values()];
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// 方法二： 计数
var groupAnagrams2 = function(strs) {
  const obj = new Object();
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const arr = new Array(26).fill(0);
    for (let j = 0; j < str.length; j++) {
      arr[str.charCodeAt(j) - 'a'.charCodeAt()]++;
    }
    obj[arr] ? obj[arr].push(str) : obj[arr] = [str];
  }
  return Object.values(obj);
}
console.log(groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"]));

// 在这段代码中，obj[arr] 中的 arr 是一个数组，
// 但是 JavaScript 会将它转换为字符串形式来作为对象 obj 的属性名。
// 这个转换过程会调用数组的 toString() 方法，该方法会将数组中的元素转换为字符串并以逗号分隔，
// 形成一个字符串。因此，相同内容的数组在转换为字符串后会得到相同的结果。
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(arr1.toString()); // 输出 "1,2,3"
console.log(arr2.toString()); // 输出 "1,2,3"
console.log(arr1.toString() === arr2.toString()); // 输出 true
