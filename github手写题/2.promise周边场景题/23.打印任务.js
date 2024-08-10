
function Queue() {
    this.queue = [];
 } //补全代码
 Queue.prototype.task = function(timer,callback) {
    this.queue.push({ timer, callback });
    return this;
 }
 Queue.prototype.start = function() {
    const queue = this.queue;
    let result = Promise.resolve();
    queue.forEach(item => {
        result = result.then(() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(item.callback());
                },item.timer)
            })
        })
    })
    return result;
 }

 new Queue()
.task(1000, () => {
    console.log(1)
})
.task(2000, () => {
    console.log(2)
})
.task(1000, () => {
    console.log(3)
})
.start()