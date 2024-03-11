
class LazyMan {
  private name: string
  private tasks: Function[] = [] // 任务队列

  constructor(name: string) {
    this.name = name
    setTimeout(() => {
      // 第一次调用，需要等其他初始化才会调用这个函数
      this.next()
    })
  }
  private next() {
    const task = this.tasks.shift() // 取出一个任务
    task && task()
  }

  eat(food: string) {
    const task = () => {
      console.info(`${this.name} eat ${food}`)
      this.next() // 立刻执行下一个任务
    }
    this.tasks.push(task)
    return this // 链式调用
  }
  sleep(seconds:  number) {
    const task = () => {
      console.info(`${this.name} 开始睡觉`)
      setTimeout(() => {
        console.info(`${this.name} 睡了 ${seconds} 秒`)
        this.next() // xx秒之后，立刻执行下一个任务
      }, seconds*1000)
    }
    this.tasks.push(task)
    return this
  }
}
const me = new LazyMan('张三')
me.eat('苹果').eat('香蕉').sleep(2).eat('葡萄').eat('西瓜').sleep(2).eat('橘子')

