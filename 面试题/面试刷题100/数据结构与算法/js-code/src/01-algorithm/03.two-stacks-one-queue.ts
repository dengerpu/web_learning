export class MyQueue {
  private stack1 = []
  private stack2 = []

  // 入队
  add(n: number): void{
    // @ts-ignore
    this.stack1.push(n)
  }

  // 出队
  delete(): number | null | undefined {
    if(this.stack2.length === 0) {
      if(this.stack1.length === 0) return null
      while(this.stack1.length > 0){
        // @ts-ignore
        this.stack2.push(this.stack1.pop())
      }
    }
    return this.stack2.pop()
  }

  // 获取长度
  get length(): number {
    return this.stack1.length + this.stack2.length
  }
}

// // 功能测试
// const q = new MyQueue()
// q.add(100)
// q.add(200)
// q.add(300)
// console.info(q.length)
// console.info(q.delete())
// console.info(q.length)
// console.info(q.delete())
// console.info(q.length)