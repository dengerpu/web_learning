
/**
 * 数组扁平化,使用push
 * @param arr 
 */
export function flatten1(arr: any[]) {
  let res: any[] = [];
  arr.forEach(item => {
    // 如果是数组，就再循环遍历一次
    if(Array.isArray(item)) {
      item.forEach(n => {
        res.push(n)
      })
    } else {
      res.push(item)
    }
  })
  return res
}

export function flatten2(arr: any[]) {
  let res: any[] = []
  arr.forEach(item => {
    res = res.concat(item)
  })
  return res
}
// 功能测试
// const arr = [1, [2, [3], 4], 5]
// console.info( flatten1(arr) )