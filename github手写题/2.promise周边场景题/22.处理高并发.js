async function asyncPool(poolLimit, tasks) {
    const results = [];
    const poolList = new Set();

    for(const task of tasks) {
        if(poolList.size === poolLimit) {
            await Promise.race(poolList).catch(err => console.log(err));
        }
        const p = task();
        const cb = () => poolList.delete(p);
        poolList.add(p);
        results.push(p);
    }
    return Promise.allSettled(results);
}

function task() {
    return new Promise(resolve => {
      setTimeout(() => {
        const timestamp = Date.now() / 1000 | 0
        console.log(timestamp)
        resolve(timestamp)
      }, 1000)
    })
}
asyncPool(2, [task, task, task, task, task, task, task, task, task])
  .then(res => {
    console.log(res)
  });