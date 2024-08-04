//JS异步数据流，实现并发异步请求，结果顺序输出
const timer = [3000, 2000, 1000, 5000, 5000];
function myTimeout(timer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(timer);
    }, timer);
  });
}
async function orderPrint(timer) {
  const promises = timer.map((time) => myTimeout(time));
  for (const p of promises) {
    console.log(await p);
  }
}
orderPrint(timer);

// 在js中实现并发，可以使用promise.all的方法也可以用async await方法来实现
export const multiFetch = () => {
    let api1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('api1')
      }, 2000)
    })
    let api2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('api2')
      }, 990)
    })
    let api3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('api3')
      }, 890)
    })
    Promise.all([api1, api2, api3]).then((res) => {
      console.log(...res)
    })
  }
