import { findTwoNumbers } from './07.two-number-sum'
describe('两数之和', () => {
  it('正常情况', () => {
      const arr = [1, 2, 4, 7, 11, 15]
      const res = findTwoNumbers(arr, 15)
      expect(res).toEqual([4, 11])
  })

  it('空数组', () => {
      const res = findTwoNumbers([], 100)
      expect(res).toEqual([])
  })

  it('找不到结果', () => {
      const arr = [1, 2, 4, 7, 11, 15]
      const n = 100
      const res = findTwoNumbers(arr, n)
      expect(res).toEqual([])
  })
})