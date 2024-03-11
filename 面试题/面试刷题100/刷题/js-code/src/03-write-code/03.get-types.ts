/**
 * 获取数据类型
 * @param x 
 * @returns 
 */
export function getType(x: any): string {
  const originType = Object.prototype.toString.call(x) // '[object String]'
  const idnex = originType.indexOf(' ')
  return originType.slice(idnex + 1, -1).toLocaleLowerCase()
}

// 功能测试
// console.info( getType(null) ) // 'null'
// console.info( getType(undefined) )
// console.info( getType(100) )
// console.info( getType('abc') )
// console.info( getType(true) )
// console.info( getType(Symbol()) )
// console.info( getType({}) )
// console.info( getType([]) )
// console.info( getType(() => {}) )