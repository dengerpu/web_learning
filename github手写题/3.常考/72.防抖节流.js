// 防抖：在一段时间内多次触发同一事件，
// 只执行最后一次触发的事件，而忽略之前的所有事件
function debounce(fn, delay) {
    let timer = null;
    return function () {
        const tontext = this;
        const args = arguments;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(tontext, args);
        }, delay);
    }
}

// 节流： 在一段时间内多次触发同一事件，每隔一定时间间隔执行一次事件
function throttle(fn, delay) {
   let timer = null;
   let lastTime = 0;
   return function () {
       const tontext = this;
       const args = arguments;
       const now = Date.now();
       if (now - lastTime >= delay) {
           fn.apply(tontext, args);
           lastTime = now;
       } else {
            if(timer) clearTimeout(timer);
            timer = setTimeout(() => {
                fn.apply(tontext, args);
                lastTime = now;
            }, delay - (now - lastTime))
       }
   }
}