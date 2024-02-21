/**
 * describe: 用链表实现队列
 * author: 会写bug的小邓程序员
 */
interface IListNode {
  value: number
  next: IListNode | null
}

export class MyQueue {
  private head: IListNode | null = null
  private tail: IListNode | null = null
  private len = 0

  // 入队 在tail位置添加
  add(n: number) {
    const newNode: IListNode = {
      value: n,
      next: null
    }
    // 处理head
    if(this.head === null) {
      this.head = newNode
    }
    // 处理tail
    const newTailNode = this.tail
    if(newTailNode !== null) {
      newTailNode.next = newNode
    }
    this.tail = newNode
    // 记录长度
    this.len++
  }

  delete(): number | null {
    const newHeadNode = this.head
    if(newHeadNode === null) return null
    if(this.length <= 0) return null
    const value = newHeadNode.value
    this.head = newHeadNode.next
    this.len --
    return value
  }
  get length(): number {
    return this.len
  }
}

// 功能测试
// const q = new MyQueue()
// q.add(100)
// q.add(200)
// q.add(300)
// console.info('length1', q.length)
// console.log(q.delete())
// console.info('length2', q.length)
// console.log(q.delete())
// console.info('length3', q.length)
// console.log(q.delete())
// console.info('length4', q.length)
// console.log(q.delete())
// console.info('length5', q.length)

// // 性能测试
// const q1 = new MyQueue()
// console.time('queue with list')
// for (let i = 0; i < 10 * 10000; i++) {
//     q1.add(i)
// }
// for (let i = 0; i < 10 * 10000; i++) {
//     q1.delete()
// }
// console.timeEnd('queue with list') // 10ms

// const q2 = []
// console.time('queue with array')
// for (let i = 0; i < 10 * 10000; i++) {
//     q2.push(i) // 入队
// }
// for (let i = 0; i < 10 * 10000; i++) {
//     q2.shift() // 出队
// }
// console.timeEnd('queue with array') // 464ms