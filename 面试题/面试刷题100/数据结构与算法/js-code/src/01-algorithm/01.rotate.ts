
/**
 * 旋转数组 k 步 - 使用 pop 和 unshift
 * @param arr 
 * @param k 
 * @returns 
 */
export function rotate1(arr: number[], k: number): number[] {
  const length = arr.length
  if(!k || length === 0) return arr
  const step = Math.abs(k % length) 

  // 时间复杂度O(n^2)
  for(let i = 0; i< step; i++) {
    let temp = arr.pop()
    if(temp) {
      arr.unshift(temp) // 数组是一个有序结构，unshift 操作非常慢！！！ O(n)
    }
  }
  return arr
}

/**
 * 旋转数组 k 步 - 使用 concat
 * @param arr 
 * @param k 
 * @returns 
 */
export function rotate2(arr: number[], k: number): number[] {
  const length = arr.length
  if(!k || length === 0) return arr
  const step = Math.abs(k % length) 
  return arr.slice(-step).concat(arr.slice(0, length - step))
}

// // 功能测试
// const arr = [1, 2, 3, 4, 5, 6, 7]
// const arr1 = rotate2(arr, 3)
// console.info(arr1)

// 性能测试
// const arr1 = []
// for (let i = 0; i < 10 * 10000; i++) {
//     arr1.push(i)
// }
// console.time('rotate1')
// rotate1(arr1, 9 * 10000)
// console.timeEnd('rotate1') // 1279.39794921875 ms O(n^2)

// const arr2 = []
// for (let i = 0; i < 10 * 10000; i++) {
//     arr2.push(i)
// }
// console.time('rotate2')
// rotate2(arr2, 9 * 10000)
// console.timeEnd('rotate2') // 0.85107421875 ms O(1)