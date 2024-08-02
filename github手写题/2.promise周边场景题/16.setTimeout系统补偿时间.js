// 在JavaScript中，setTimeout函数用于在指定的时间后执行一次性的操作。
// 关于系统补偿时间的问题，通常是指在使用setTimeout时可能存在的延迟或误差。

// 在实际应用中，setTimeout并不是完全精确的定时器。
// 这是因为JavaScript是单线程执行的，而且浏览器或Node.js运行环境可能会受到其他因素的影响，
// 导致定时器的执行时间并不总是精确的。这些因素包括事件循环的负载、系统资源的竞争、浏览器标签页的活跃性等。

// 为了弥补这种不确定性，有时候会使用系统补偿时间，即在设置定时器时考虑到可能存在的延迟，
// 提前调整定时器的时间。这样可以更接近预期的执行时间，减少因为延迟而导致的问题。
function _timerSetInterval(fn, delay, ...args) {
    let current = Date.now();
    let timer = null;

    const task = () => {
        current + delay;
        timer = setTimeout(() => {
            fn.apply(this, args);
            task();
        }, current - Date.now());
    }
    task();
    return () => clearTimeout(timer);
}

function mySettimeout(fn, time) {
    let start = new Date().getTime();
    let count = 1;
    fn();
    function instance() {
      let gap = time * count;
      let fact = new Date().getTime() - start;
      let diff = fact - gap;
      count++;
      fn();
      setTimeout(() => {
        instance();
      }, time - diff);
    }
    setTimeout(() => {
      instance();
    }, time);
  }
  mySettimeout(() => console.log(new Date()), 10000);