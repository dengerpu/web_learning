// import '@babel/polyfill'
// 上面这种是全局引入方式，按需引入需要再.babelrc中配置
const sum = (a, b) => a + b

// 新的 API
Promise.resolve(100).then(data => data);

// 新的 API
[10, 20, 30].includes(20)
