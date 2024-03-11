
/**
 * 深层次数组扁平化，使用push
 * @param arr 
 * @returns 
 */
export function flattenDeep1(arr: any[]): any[] {
  let res: any[] = []
  arr.forEach(item => {
    // 深层次递归遍历
    if(Array.isArray(item)) {
      const childItem = flattenDeep1(item)
      // 这里返回的是一个数组
      res.push(...childItem)
    } else {
      res.push(item)
    }
  })
  return res
}
/**
 * 深层次数组扁平化， 使用concat
 * @param arr 
 * @returns 
 */
export function flattenDeep2(arr: any[]): any[] {
  let res: any[] = []
  arr.forEach(item => {
    if(Array.isArray(item)) {
      res = res.concat(flattenDeep2(item))
    } else {
      res = res.concat(item)
    }
  })
  return res
}

// // 功能测试
// const arr = [1, [2, [3, ['a', [true], 'b'], 4], 5], 6]
// console.info( flattenDeep1(arr) )