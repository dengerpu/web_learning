class Throttler {
    constructor(limit) {
        this.limit = limit; // 并发限制数量
        this.activeCount= 0; // 当前正在执行的任务数
        this.queue = []; // 
    }
    // 将任务加入队列并返回promise
    enqueue(task) {
        return new Promise((resolve, reject) => {
            this.queue.push(() => task().then(resolve).catch(reject));
            this.runNext();
        })
    }
    runNext() {
        if(this.activeCount < this.limit && this.queue.length > 0) {
            this.activeCount++;
            const task = this.queue.shift();
            task().finally(() => {
                this.activeCount--;
                this.runNext();
            })
        }
    }
}
// 创建一个限流器，设置并发上限为 3
const throttler = new Throttler(3);

// 定义一个示例任务
function exampleTask(id) {
  return () => new Promise(resolve => {
    console.log(`Task ${id} started`);
    setTimeout(() => {
      console.log(`Task ${id} completed`);
      resolve(id);
    }, 1000); // 每个任务执行时间为 1 秒
  });
}

// 添加任务到限流器中
const tasks = Array.from({ length: 10 }, (_, i) => throttler.enqueue(exampleTask(i)));

// 等待所有任务完成
Promise.all(tasks).then(() => {
  console.log("All tasks completed");
});