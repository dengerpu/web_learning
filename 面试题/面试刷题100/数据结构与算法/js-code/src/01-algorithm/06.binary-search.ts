/***
 * describe: 二分查找
 * aythor: 爱写bug的小邓程序
 */

/**
 * 循环查找
 * @param arr 
 * @param target 
 * @returns 
 */
export function binarySearch(arr: number[], target: number): number {
  const length = arr.length
  if(length === 0) return -1
  let start = 0, end = length - 1
  while(start <= end) {
    let midIndex = Math.floor((start + end)/2)
    let midValue = arr[midIndex]
    if(target < midValue) {
      // 目标值较小，则继续在左侧查找
      end = midIndex - 1
    }else if (target > midValue) {
      // 目标值较大，则继续在右侧查找
      start = midIndex + 1
    } else {
      return midIndex
    }
  }
  return -1
}

/**
 * 递归二分
 * @param arr 
 * @param target 
 * @param start 
 * @param end 
 * @returns 
 */
export function binarySearchRecursive(arr: number[], target: number, start?: number, end?: number): number {
  const length = arr.length
  if (length === 0) return -1

  // 开始和结束的范围
  if (start == null) start = 0
  if (end == null) end = length - 1

  if(start > end) return -1
  const midIndex = Math.floor((start + end)/2)
  const midValue = arr[midIndex]
  if(target < midValue) {
    return binarySearchRecursive(arr, target, start, midIndex - 1)
  } else if (target > midValue) {
    return binarySearchRecursive(arr, target, midIndex + 1, end)
  } else {
    return midIndex
  }
}

// // 功能测试
// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
// const target = 40
// console.info(binarySearch(arr, target))

// 性能测试
// console.time('binarySearch')
// for (let i = 0; i < 100 * 10000; i++) {
//   binarySearch(arr, target)
// }
// console.timeEnd('binarySearch') // 15ms
// console.time('binarySearchRecursive')
// for (let i = 0; i < 100 * 10000; i++) {
//   binarySearchRecursive(arr, target)
// }
// console.timeEnd('binarySearchRecursive') // 30ms