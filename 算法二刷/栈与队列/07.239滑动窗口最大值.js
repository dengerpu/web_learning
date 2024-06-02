/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  class MyQueue { //单调递减队列
      queue;
      constructor() {
          this.queue = [];
      }
      enqueue(value) { // 进入队列的时候弹出前面小的元素, 队列始终保持单调递减
          let back = this.queue[this.queue.length - 1];
          while(back !== undefined && back < value) {
              this.queue.pop();
              back = this.queue[this.queue.length - 1];
          }
          this.queue.push(value);
      }
      dequeue(value) {
          let max = this.getMaxValue();
          if(max === value) {
              this.queue.shift();
          }
      }
      getMaxValue() {
          return this.queue[0];
      }
  }
  let myQueue = new MyQueue();
  let i = 0, j = 0;
  let res = [];
  while(j < k) {
      myQueue.enqueue(nums[j++]);
  }
  res.push(myQueue.getMaxValue());
  while(j < nums.length) {
      // 窗口移动，删除前一个值， 下一个值入队列
      myQueue.enqueue(nums[j++]); 
      myQueue.dequeue(nums[i++]);
      res.push(myQueue.getMaxValue());
  }
  return res;
};