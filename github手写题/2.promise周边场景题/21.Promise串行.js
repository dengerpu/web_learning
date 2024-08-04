//Promise串行
async function serialPromise(taskarr) {
    let res = [];
    for (const task of taskarr) {
      try {
        res.push(await task());
      } catch (err) {
        res.push(null);
      }
    }
    return res;
  }
  