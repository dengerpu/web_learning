/**
 * 两数之和
 * @param arr 
 * @param target 
 * @returns 
 */
export function findTwoNumbers(arr: number[], target: number): number[] {
  let length = arr.length;
  if(length <= 1) return []
  let i = 0, j = length - 1;
  while(i < j) {
    if(arr[i] + arr[j] > target) j--;
    else if(arr[i] + arr[j] < target) i++;
    else return [arr[i], arr[j]];
  }
  return [];
}
const arr = [1, 2, 4, 7, 11, 15]
console.info(findTwoNumbers(arr, 15))